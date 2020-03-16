const mongoose = require('mongoose')
const expressRouter = require('./backend/router');
const blockchain = require('./backend/blockchain/controller');

const logger = require('./backend/logger');

mongoose.connect('mongodb://localhost:27017/lotto', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    logger.mongo.info('connected to MongoDB');
    expressRouter.start();
    blockchain.start();
})
.catch((err) => console.log(`error occured: ${err.stack}`))

// // POC section
// const fs = require("fs");

// let state = "start";

// const Web3 = require('web3');
// const web3 = new Web3();
// web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));
// let netId = "5777";

// let contract
// let defaultAccount
// web3.eth.getAccounts().then(acc => {
//     console.log(acc);
//     defaultAccount = acc[0];

//     const contractSource = fs.readFileSync("./build/contracts/Random.json");
//     const contractJSON = JSON.parse(contractSource);
//     contract = new web3.eth.Contract(contractJSON['abi'], contractJSON['networks'][netId]['address'])
// });

// setInterval(async () => {
//     const configService = require('./backend/service/config').instance;
//     let config = await configService.getConfiguration('local');
//     if(!config.nextLive || config.nextLive == null) {
//         console.log('date not set')
//     }
//     let date = new Date(config.nextLive);
//     if(new Date().getTime() >= date.getTime() && state === 'start') {
//         state = 'finish';
//         console.log('\n\nRandom contract call')
//         web3.eth.getBlockNumber().then(console.log);
//         contract.methods.rand(50).send({ from: defaultAccount, gasLimit: "5500000", gasPrice: "30000000000" })
//         .then(result => {
//             if(Array.isArray(result.events.Result)) {
//                 r = []
//                 result.events.Result.forEach(element => {
//                     // console.log(element.returnValues)
//                     r.push(
//                         {
//                             index: parseInt(element.returnValues.i), 
//                             result1: element.returnValues.result1, 
//                             result2: element.returnValues.result2, 
//                             result3: element.returnValues.result3, 
//                             result4: element.returnValues.result4, 
//                             result5: element.returnValues.result5
//                         }
//                     )
//                 });
//             } else {
//                 let element = result.events.Result;
//             }
//             console.log(result);
//         })
//     } else {
//         console.log('not this time');
//     }
// }, 5 * 1000)