const fs = require("fs");

const env = (process.argv[2]) ? process.argv[2] : 'local';

module.exports.env = env;