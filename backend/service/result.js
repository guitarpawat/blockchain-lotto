const History = require('../model/history')

class ResultService {
    getAllResults() {
        return History.find({env: 'local'}, {'_id': 1,'startTime': 1});
    }

    getResultById(id) {
        return History.findById(id, {'__v': 0});
    }
}

module.exports.instance = new ResultService();