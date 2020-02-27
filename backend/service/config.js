const Configuration = require('../model/configuration')

class ConfigService {
    getConfiguration(env) {
        return Configuration.findOne({env: `${env}`}, { '_id': 0});
    }
}

module.exports.instance = new ConfigService();