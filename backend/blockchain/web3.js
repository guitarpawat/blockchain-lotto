const fs = require("fs");
const Web3 = require('web3');
const web3 = new Web3();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const logger = require('../logger');
const Config = require('../model/configuration');
const Constants = require('../constants');

class Web3Wrapper {
    constructor(web3Instance) {
        this.defaultAccount = null;
        this.accounts = null;
        this.contract = null;
        this.contractAddress = null;
        this.web3 = web3Instance;
    }

    async start() {
        let netId;
        if(Constants.env === 'local') {
            web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));
            netId = "5777";
        } else if(Constants.env === 'ropsten') {
            const mnemonic = fs.readFileSync("mnemonic.txt").toString().trim();
            const infuraApi = fs.readFileSync("infura_api.txt").toString().trim();
            web3.setProvider(new HDWalletProvider(mnemonic, infuraApi));
            netId = "3";
        } else {
            logger.blockchain.error('unknown env: ' + Constants.env);
            process.exit(1);
        }
        logger.blockchain.debug('env is ' + Constants.env);
        
        try {
            this.accounts = await web3.eth.getAccounts();
            this.defaultAccount = this.accounts[0];
        
            const contractSource = fs.readFileSync("./build/contracts/Random.json");
            const contractJSON = JSON.parse(contractSource);
            this.contractAddress = contractJSON['networks'][netId]['address'];
            this.contract = new web3.eth.Contract(contractJSON['abi'], this.contractAddress)
            logger.blockchain.info('init web3 successful')
        } catch(e) {
            logger.blockchain.error('cannot init web3: ', e);
            process.exit(1);
        }
        try {
            await Config.updateOne({env: Constants.env}, {contractAddress: this.contractAddress});
            logger.mongo.info('update contract address successful')
        } catch(e) {
            logger.mongo.error('cannot update contract address: ', e);
            process.exit(1);
        }
    }
}

module.exports = new Web3Wrapper(web3);