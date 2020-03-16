const fs = require("fs");
const Web3 = require('web3');
const web3 = new Web3();
const logger = require('../logger');

class Web3Wrapper {
    constructor(web3Instance) {
        this.defaultAccount = null;
        this.accounts = null;
        this.contract = null;
        this.web3 = web3Instance;
    }

    start() {
        web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));
        let netId = "5777";
        
        this.contract;
        this.accounts;
        this.defaultAccount;
        this.contractAddress;
        web3.eth.getAccounts()
        .then(acc => {
            this.accounts = acc;
            this.defaultAccount = acc[0];
        
            const contractSource = fs.readFileSync("./build/contracts/Random.json");
            const contractJSON = JSON.parse(contractSource);
            this.contractAddress = contractJSON['networks'][netId]['address'];
            this.contract = new web3.eth.Contract(contractJSON['abi'], this.contractAddress)
            logger.blockchain.info('init web3 successful')
        })
        .catch(err => {
            logger.blockchain.error('cannot init web3: ', err);
            process.exit(1);
        });
    }
}

module.exports = new Web3Wrapper(web3);