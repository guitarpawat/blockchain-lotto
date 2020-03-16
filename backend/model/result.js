const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  env:  String,
  startTime: Date,
  contractAddress: String,
  results: [{
    offset: Number,
    retries: Number,
    result: [Number],
    executeAt: Number,
    confirmAt: Number
  }]
})

const resultModel = mongoose.model('Result', resultSchema);

module.exports = resultModel;