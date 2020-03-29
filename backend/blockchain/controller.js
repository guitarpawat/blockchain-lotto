const configurationService = require('../service/config').instance;
const logger = require('../logger');
const CallBlock = require('./call_block');
const web3Wrapper = require('./web3');
const State = require('./state')
const Status = require('./status');
const Result = require('../model/result')
const updateDBFunc = require('./db_update').updateDB;
const Constants = require('../constants');

class Controller {
    constructor(callBlocks, startTime, confirmationNeeds) {
        this.startTime = startTime;
        this.callingBlocks = callBlocks;
        this.confirmationNeeds = confirmationNeeds;
        this.started = false;
        this.finished = false;
        this.startBlock = -1;
        this.getCurrentBlock()
        .then(res => this.startBlock = res)
        .catch(err => {
            logger.blockchain.error('lost connection to the blockchain network, the lottery session will not start!');
            logger.blockchain.error('caused by: ', err);
            this.finished = true;
        })
        this.contractAddress = web3Wrapper.contractAddress;
        this.start();
    }

    run() {
        if(!this.started) return;
        let pendingExecute = -1;
        for(let i=0; i<this.callingBlocks.length; i++) {
            if(this.callingBlocks[i].state === State.PENDING_EXECUTE) {
                pendingExecute = i;
                break;
            }
        }
        if(pendingExecute < 0) {
            for(let i=0; i<this.callingBlocks.length; i++) {
                if(this.callingBlocks[i].state === State.PENDING_CALL) {
                    this.callContract(this.callingBlocks[i]);
                    break;
                }
            }
        }
        this.callingBlocks
            .filter(ele => ele.state === State.CONFIRMED)
            .forEach(ele => this.saveToDatabase(ele));

        if (this.callingBlocks
            .filter(ele => ele.state !== State.COMPLETED)
            .length === 0) {
                this.setCompleted();
        }
    }

    callContract(callBlock) {
        callBlock.callContract();
        web3Wrapper.contract.methods.rand(callBlock.offset, callBlock.size)
        .send({ from: web3Wrapper.defaultAccount, gasLimit: "5500000", gasPrice: "30000000000" })
        .on('receipt', receipt => {
            callBlock.executeContract(receipt.blockNumber);
        })
        .on('confirmation', (confirmationNumber, receipt) => {
            if(confirmationNumber === this.confirmationNeeds) {
                let results = new Array(callBlock.size);
                if(Array.isArray(receipt.events.Result)) {
                    receipt.events.Result.forEach(e => {
                        let i = Number.parseInt(e.returnValues.i);
                        results[i] = Number.parseInt(e.returnValues.result1);
                        results[i+1] = Number.parseInt(e.returnValues.result2);
                        results[i+2] = Number.parseInt(e.returnValues.result3);
                        results[i+3] = Number.parseInt(e.returnValues.result4);
                        results[i+4] = Number.parseInt(e.returnValues.result5);
                    });
                } else {
                    let returnVal = receipt.events.Result.returnValues
                    results[0] = Number.parseInt(returnVal.result1);
                    results[1] = Number.parseInt(returnVal.result2);
                    results[2] = Number.parseInt(returnVal.result3);
                    results[3] = Number.parseInt(returnVal.result4);
                    results[4] = Number.parseInt(returnVal.result5);
                }
                callBlock.results = results;
                callBlock.confirmResult(receipt.blockNumber + this.confirmationNeeds);
            }
        })
        .catch(err => {
            callBlock.resetOnError();
            logger.blockchain.debug('error: ', err)
        });
    }

    start() {
        web3Wrapper.contract.methods.setBlock()
        .send({ from: web3Wrapper.defaultAccount, gasLimit: "5500000", gasPrice: "30000000000" })
        .on('receipt', receipt => {
            this.started = true;
            logger.blockchain.info('lottery drawing session started');
        })
        .catch(err => {
            callBlock.resetOnError();
            logger.blockchain.debug('error: ', err)
        });
    }

    setCompleted() {
        web3Wrapper.contract.methods.setCompleted()
        .send({ from: web3Wrapper.defaultAccount, gasLimit: "5500000", gasPrice: "30000000000" })
        .on('receipt', receipt => {
            this.finished = true;
            logger.blockchain.info('lottery drawing session finished');
        })
        .catch(err => {
            callBlock.resetOnError();
            logger.blockchain.debug('error: ', err)
        });
    }

    saveToDatabase(callBlock) {
        let filter = {env: Constants.env, startTime: this.startTime, contractAddress: web3Wrapper.contractAddress}
        let update = {$push: {results: {
            offset: callBlock.offset,
            retries: callBlock.retries,
            result: callBlock.results,
            executeAt: callBlock.executeAt,
            confirmAt: callBlock.confirmAt
        }}}
        Result.updateOne(filter, update, {upsert: true}, (error, writeOpResult) => {
            if(error) {
                logger.mongo.error(`cannot update result: `, error);
                logger.mongo.error(`offset=${callBlock.offset}`);
                logger.mongo.error(`result=${callBlock.results}`);
            } else {
                callBlock.setComplete();
                logger.mongo.info(`successful update for offset ${callBlock.offset}`);
            }
        });
    }

    async getCurrentBlock() {
        return await web3Wrapper.web3.eth.getBlockNumber();
    }
}

function initCallBlocks() {
    let callBlocks = new Array();
    for(let i=0; i<36; i++) {
        callBlocks.push(new CallBlock(i, 50));
    }
    for(let i=36; i<48; i++) {
        callBlocks.push(new CallBlock(i, 15));
    }
    for(let i=48; i<60; i++) {
        callBlocks.push(new CallBlock(i, 5));
    }
    for(let i=60; i<72; i++) {
        callBlocks.push(new CallBlock(i, 5));
    }
    logger.blockchain.info('init all call blocks');
    return callBlocks;
}

let controller;

async function doJob() {
    let config;
    try {
        config = await configurationService.getConfiguration();
    } catch(e) {
        logger.mongo.error('error occured: ', e);
        return;
    }

    if(!config.status || config.status === Status.FINISHED) {
        controller = null;
    } else if(config.status === Status.LIVE) {
        if(controller) {
            controller.run();
        } else {
            logger.blockchain.error('something must went wrong while last live');
        }
    } else if(config.status === Status.PENDING) {
        if(!config.nextLive) {
            logger.blockchain.debug('nextLive is not set')
            return;
        }
        let nextLive = new Date(config.nextLive).getTime();
        if(new Date().getTime() >= nextLive) {
            controller = new Controller(initCallBlocks(), nextLive, config.confirmationBlocks);
            try {
                await configurationService.updateStatus(Status.LIVE);
            } catch(e) {
                logger.mongo.error('cannot update status from pending to live', e);
            }
            logger.blockchain.info("init new session for lottery drawing");
        }
    } else {
        logger.blockchain.error('invalid status in db');
    }
}

const runner = function() {
    try {
        web3Wrapper.start();
        setInterval(() => doJob(), 10000);
        setInterval(() => updateDBFunc(), 10000);
    } catch(e) {
        logger.blockchain.error('error occured: ', e);
        process.exit(1);
    }
    logger.blockchain.info('init blockchain api controller')
}

module.exports.start = runner;