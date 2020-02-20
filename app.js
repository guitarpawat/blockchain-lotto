const express = require('express')
const app = express()
const port = 3000

const fs = require("fs");

const Web3 = require('web3');
const web3 = new Web3();
const HDWalletProvider = require("@truffle/hdwallet-provider");

if(process.argv.length !== 4) {
    console.log('Usage:', process.argv[0], process.argv[1], '<network>', '<address index>')
    console.log('network:       Ethereum network [local|ropsten]')
    console.log('address index: Index in the provider address list (0 is contract deployer)')
    console.log('');
    process.exit(1);
}

let netId;

if(process.argv[2] === 'local') {
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));
    netId = "5777";
} else if(process.argv[2] === 'ropsten') {
    const mnemonic = fs.readFileSync("mnemonic.txt").toString().trim();
    const infuraApi = fs.readFileSync("infura_api.txt").toString().trim();
    web3.setProvider(new HDWalletProvider(mnemonic, infuraApi));
    netId = "3";
} else {
    console.log('invalid network:', process.argv[2]);
    console.log('');
    process.exit(1);
}

let defaultAccIndex = parseInt(process.argv[3])

if(isNaN(defaultAccIndex) || defaultAccIndex < 0) {
    console.log('please enter non-negative integer:', process.argv[3]);
    console.log('');
    process.exit(1);
}

let accounts
let defaultAccount;
let contract
web3.eth.getAccounts().then(acc => {
    accounts = acc;
    console.log(acc);
    if(defaultAccIndex < accounts.length) {
        defaultAccount = accounts[defaultAccIndex];
    } else {
        console.log('account index out of bound, has length:', accounts.length);
        console.log('');
        process.exit(1);
    }

    const contractSource = fs.readFileSync("./build/contracts/Random.json");
    const contractJSON = JSON.parse(contractSource);
    contract = new web3.eth.Contract(contractJSON['abi'], contractJSON['networks'][netId]['address'])
});

app.get('/', (req, res) => {
    console.log('\n\nRandom contract call')
    web3.eth.getBlockNumber().then(console.log);
    contract.methods.rand(50).send({ from: defaultAccount, gasLimit: "5500000", gasPrice: "30000000000" })
    .then(result => {
        if(Array.isArray(result.events.Result)) {
            r = []
            result.events.Result.forEach(element => {
                // console.log(element.returnValues)
                r.push(
                    {
                        index: parseInt(element.returnValues.i), 
                        result1: element.returnValues.result1, 
                        result2: element.returnValues.result2, 
                        result3: element.returnValues.result3, 
                        result4: element.returnValues.result4, 
                        result5: element.returnValues.result5
                    }
                )
            });
            res.json(r)
        } else {
            let element = result.events.Result;
            res.json(
                {
                    index: parseInt(element.returnValues.i), 
                    result1: element.returnValues.result1, 
                    result2: element.returnValues.result2, 
                    result3: element.returnValues.result3, 
                    result4: element.returnValues.result4, 
                    result5: element.returnValues.result5
                }
            )
        }
        console.log(result);
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))