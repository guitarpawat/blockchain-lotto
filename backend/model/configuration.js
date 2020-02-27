const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configurationSchema = new Schema({
  env:  String,
  nextLive: Date,
  contractAddress: String,
  requiredInfura: Boolean,
  infuraAPI: String,
  mnemonic: String
}, { _id: false})

const configurationModel = mongoose.model('Configuration', configurationSchema);

module.exports = configurationModel;