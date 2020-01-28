const express = require('express')
const app = express()
const port = 3000

const fs = require("fs");

const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));
const contractSource = fs.readFileSync("./build/contracts/Random.json");
const contractJSON = JSON.parse(contractSource)
const contract = new web3.eth.Contract(contractJSON['abi'], contractJSON['networks']['5777']['address'])

if(!process.argv[2]) {
    console.log('please specified address')
    process.exit(1);
}


app.get('/', (req, res) => {
    console.log('\n\nRandom contract call')
    contract.methods.rand().send({ from: process.argv[2] })
    .then(result => {
        r = new Array()
        result.events.Result.forEach(element => {
            console.log(element.returnValues)
            r.push({index: parseInt(element.returnValues.i), result: ("000000" + element.returnValues.result).slice(-6)})
        });
        res.json(r)
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))