const configService = require('./config').instance;
const resultService = require('./result').instance;
const Status = require('../blockchain/status');

class StatusService {
    async getStatus(env) {
        let config = await configService.getConfiguration(env);
        if(typeof config.nextLive === 'undefined') {
            config.nextLive = null;
        }
        const isLive = (config.status === Status.LIVE);
        let liveId = null;
        if (isLive) {
            let result = await resultService.getResultByEnvAndTime(config.nextLive)
            if(result && result._id) {
                liveId = result._id;
            }
        }
        return {
            network: config.env, 
            nextLive: config.nextLive, 
            isLive: isLive,
            liveId: liveId,
            contractAddress: config.contractAddress
        };
    }
}

module.exports.instance = new StatusService();