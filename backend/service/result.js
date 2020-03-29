const History = require('../model/history')
const configService = require('./config').instance;
const Status = require('../blockchain/status');
const Constants = require('../constants');

class ResultService {
    async getAllResults() {
        let config = await configService.getConfiguration(Constants.env);
        if(config.status === Status.LIVE) {
            return History.find({
                $and: [
                    {env: Constants.env},
                    {startTime: {$ne: config.nextLive}}
                ]
            }, 
            {'_id': 1,'startTime': 1});
        } else {
            return History.find({env: Constants.env},{'_id': 1,'startTime': 1});
        }
    }

    getResultById(id) {
        return History.findById(id, {'__v': 0});
    }

    getResultByEnvAndTime(time) {
        return History.findOne({env: Constants.env, 'startTime': time}, {'_id': 1});
    }
}

module.exports.instance = new ResultService();