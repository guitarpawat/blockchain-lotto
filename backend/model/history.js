const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
  env:  String,
  startTime: Date,
  contractAddress: String,
  first: String,
  besideFirst: [String],
  second: [String],
  third: [String],
  forth: [String],
  fifth: [String],
  frontThree: [String],
  lastThree: [String],
  lastTwo: String
})

const historyModel = mongoose.model('History', historySchema);

module.exports = historyModel;