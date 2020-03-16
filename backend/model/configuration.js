const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configurationSchema = new Schema({
  env:  String,
  nextLive: Date,
  contractAddress: String,
  confirmationBlocks: Number,
  requiredInfura: Boolean,
  infuraAPI: String,
  mnemonic: String
})

const configurationModel = mongoose.model('Configuration', configurationSchema);

module.exports = configurationModel;