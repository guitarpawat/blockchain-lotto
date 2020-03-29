const Configuration = require('../model/configuration');
const Constants = require('../constants');
const Status = require('../blockchain/status');

class ConfigService {
    getConfiguration() {
        return Configuration.findOne({env: Constants.env}, { '_id': 0});
    }

    updateStatus(status) {
        if(status === Status.FINISHED) {
            return Configuration.updateOne({env: Constants.env}, {status: `${status}`, nextLive: null});
        }
        return Configuration.updateOne({env: Constants.env}, {status: `${status}`});
    }
}

module.exports.instance = new ConfigService();