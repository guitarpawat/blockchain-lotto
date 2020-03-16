const configurationService = require('../service/config').instance;
const logger = require('../logger');
const CallBlock = require('./call_block');
const web3Wrapper = require('./web3');
const State = require('./state')
const Result = require('../model/result')
const History = require('../model/history')

class Controller {
    constructor(callBlocks, startTime, confirmationNeeds, saveHistory) {
        this.startTime = startTime;
        this.callingBlocks = callBlocks;
        this.confirmationNeeds = confirmationNeeds;
        this.finished = false;
        this.saveHistory = saveHistory;
        this.startBlock = -1;
        this.getCurrentBlock()
        .then(res => this.startBlock = res)
        .catch(err => {
            logger.blockchain.error('lost connection to the blockchain network, the lottery session will not start!');
            logger.blockchain.error('caused by: ', err);
            this.finished = true;
        })
        this.contractAddress = web3Wrapper.contractAddress;
    }

    run() {
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
                this.saveHistory(this.callingBlocks, 'local', this.startTime, this.contractAddress);
                this.finished = true;
                logger.blockchain.info('lottery drawing session finished');
        }
    }

    callContract(callBlock) {
        callBlock.callContract();
        web3Wrapper.contract.methods.rand(callBlock.offset, callBlock.retries, callBlock.size)
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

    saveToDatabase(callBlock) {
        let filter = {env: 'local', startTime: this.startTime, contractAddress: web3Wrapper.contractAddress}
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
                logger.mongo.error(`offset=${callBlock.offset}, retries=${callBlock.retries}`);
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

let save = function saveHistory(callBlocks, env, startTime, contractAddress) {
    let fifth = new Array();
    let forth = new Array();
    let third = new Array();
    let second = new Array();
    let first = "";
    let besideFirst = new Array();
    let frontThree = new Array();
    let lastThree = new Array();
    let lastTwo = "";

    for(let i=0; i<2; i++) {
        for(let j=0; j<50; j++) {
            fifth.push(resolveBlock(
                callBlocks[12*i].results[j], callBlocks[12*i + 1].results[j], callBlocks[12*i + 2].results[j],
                callBlocks[12*i + 3].results[j], callBlocks[12*i + 4].results[j], callBlocks[12*i + 5].results[j],
                callBlocks[12*i + 6].results[j], callBlocks[12*i + 7].results[j], callBlocks[12*i + 8].results[j],
                callBlocks[12*i + 9].results[j], callBlocks[12*i + 10].results[j], callBlocks[12*i + 11].results[j]
            ));
        }
    }

    let i = 2;
    for(let j=0; j<50; j++) {
        forth.push(resolveBlock(
            callBlocks[12*i].results[j], callBlocks[12*i + 1].results[j], callBlocks[12*i + 2].results[j],
                callBlocks[12*i + 3].results[j], callBlocks[12*i + 4].results[j], callBlocks[12*i + 5].results[j],
                callBlocks[12*i + 6].results[j], callBlocks[12*i + 7].results[j], callBlocks[12*i + 8].results[j],
                callBlocks[12*i + 9].results[j], callBlocks[12*i + 10].results[j], callBlocks[12*i + 11].results[j]
        ));
    }

    i = 3;
    for(let j=0; j<10; j++) {
        third.push(resolveBlock(
            callBlocks[12*i].results[j], callBlocks[12*i + 1].results[j], callBlocks[12*i + 2].results[j],
                callBlocks[12*i + 3].results[j], callBlocks[12*i + 4].results[j], callBlocks[12*i + 5].results[j],
                callBlocks[12*i + 6].results[j], callBlocks[12*i + 7].results[j], callBlocks[12*i + 8].results[j],
                callBlocks[12*i + 9].results[j], callBlocks[12*i + 10].results[j], callBlocks[12*i + 11].results[j]
        ));
    }

    for(let j=10; j<15; j++) {
        second.push(resolveBlock(
            callBlocks[12*i].results[j], callBlocks[12*i + 1].results[j], callBlocks[12*i + 2].results[j],
                callBlocks[12*i + 3].results[j], callBlocks[12*i + 4].results[j], callBlocks[12*i + 5].results[j],
                callBlocks[12*i + 6].results[j], callBlocks[12*i + 7].results[j], callBlocks[12*i + 8].results[j],
                callBlocks[12*i + 9].results[j], callBlocks[12*i + 10].results[j], callBlocks[12*i + 11].results[j]
        ));
    }

    i = 4;
    first = resolveBlock(
        callBlocks[12*i].results[0], callBlocks[12*i + 1].results[0], callBlocks[12*i + 2].results[0],
                callBlocks[12*i + 3].results[0], callBlocks[12*i + 4].results[0], callBlocks[12*i + 5].results[0],
                callBlocks[12*i + 6].results[0], callBlocks[12*i + 7].results[0], callBlocks[12*i + 8].results[0],
                callBlocks[12*i + 9].results[0], callBlocks[12*i + 10].results[0], callBlocks[12*i + 11].results[0]
    );

    let beside1 = parseInt(first) - 1;
    if(beside1 < 0) {
        beside1 = 999999;
    }
    let beside2 = parseInt(first) + 1;
    if(beside2 > 999999) {
        beside2 = 0;
    }
    besideFirst.push(("000000" + beside1).slice(-6));
    besideFirst.push(("000000" + beside2).slice(-6));

    i = 5;
    for(let j=0; j<2; j++) {
        frontThree.push(resolveBlock(
            callBlocks[12*i].results[j], callBlocks[12*i + 1].results[j], callBlocks[12*i + 2].results[j],
                callBlocks[12*i + 3].results[j], callBlocks[12*i + 4].results[j], callBlocks[12*i + 5].results[j],
                callBlocks[12*i + 6].results[j], callBlocks[12*i + 7].results[j], callBlocks[12*i + 8].results[j],
                callBlocks[12*i + 9].results[j], callBlocks[12*i + 10].results[j], callBlocks[12*i + 11].results[j]
        ).substring(0, 3));
    }

    for(let j=2; j<4; j++) {
        lastThree.push(resolveBlock(
            callBlocks[12*i].results[j], callBlocks[12*i + 1].results[j], callBlocks[12*i + 2].results[j],
                callBlocks[12*i + 3].results[j], callBlocks[12*i + 4].results[j], callBlocks[12*i + 5].results[j],
                callBlocks[12*i + 6].results[j], callBlocks[12*i + 7].results[j], callBlocks[12*i + 8].results[j],
                callBlocks[12*i + 9].results[j], callBlocks[12*i + 10].results[j], callBlocks[12*i + 11].results[j]
        ).substring(3, 6));
    }

    lastTwo = resolveBlock(
        callBlocks[12*i].results[0], callBlocks[12*i + 1].results[0], callBlocks[12*i + 2].results[0],
            callBlocks[12*i + 3].results[0], callBlocks[12*i + 4].results[0], callBlocks[12*i + 5].results[0],
            callBlocks[12*i + 6].results[0], callBlocks[12*i + 7].results[0], callBlocks[12*i + 8].results[0],
            callBlocks[12*i + 9].results[0], callBlocks[12*i + 10].results[0], callBlocks[12*i + 11].results[0]
    ).substring(4, 6);

    History.updateOne({
        env:  env,
        startTime: startTime,
        contractAddress: contractAddress,
        first: first,
        besideFirst: besideFirst,
        second: second,
        third: third,
        forth: forth,
        fifth: fifth,
        frontThree: frontThree,
        lastThree: lastThree,
        lastTwo: lastTwo
    }, {}, {upsert: true}, (err, writeOpResult) => {
        if(err) {
            logger.mongo.error('cannot save result to history: ', err);
        }
    });
    logger.mongo.info('successful insert result history')
}

function resolveBlock(i01, i02, i03, i04, i05, i06, i07, i08, i09, i10, i11, i12) {
    let digit1 = (i01 % 5) + (5 * (i02 % 2));
    let digit2 = (i03 % 5) + (5 * (i04 % 2));
    let digit3 = (i05 % 5) + (5 * (i06 % 2));
    let digit4 = (i07 % 5) + (5 * (i08 % 2));
    let digit5 = (i09 % 5) + (5 * (i10 % 2));
    let digit6 = (i11 % 5) + (5 * (i12 % 2));
    return `${(digit1)}${(digit2)}${(digit3)}${(digit4)}${(digit5)}${digit6}`;
}

let controller;

async function doJob() {
    let config;
    try {
        config = await configurationService.getConfiguration('local');
    } catch(e) {
        logger.mongo.error('error occured: ', e);
        return;
    }
    if(!config.nextLive && (!controller || controller.finished)) {
        logger.blockchain.debug('nextLive is not set')
        return;
    }
    let nextLive = new Date(config.nextLive).getTime();
    if(new Date().getTime() >= nextLive) {
        if(!controller || (controller.finished && controller.startTime !== nextLive)) {
            controller = new Controller(initCallBlocks(), nextLive, config.confirmationBlocks, save);
            logger.blockchain.info("init new session for lottery drawing");
        }
        if(!controller.finished && controller.startTime === nextLive) {
            controller.run();
        }
    }
}

const runner = function() {
    try {
        web3Wrapper.start();
        setInterval(() => doJob(), 2500);
    } catch(e) {
        logger.blockchain.error('error occured: ', e);
        process.exit(1);
    }
    logger.blockchain.info('init blockchain api controller')
}

module.exports.start = runner;