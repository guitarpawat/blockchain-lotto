const Configuration = require('../model/configuration')

class ConfigService {
    getConfiguration(env) {
        return Configuration.findOne({env: `${env}`}, { '_id': 0});
    }

    updateStatus(env, status) {
        return Configuration.updateOne({env: `${env}`}, {status: `${status}`});
    }
}

module.exports.instance = new ConfigService();