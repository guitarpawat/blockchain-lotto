const configurationService = require('../service/config').instance;
const logger = require('../logger');
const Status = require('./status');
const Result = require('../model/result')
const History = require('../model/history')

const blankResults = {result: []};

async function updateDB() {
    let config;
    try {
        config = await configurationService.getConfiguration('local');
    } catch(e) {
        logger.mongo.error('error occured while getting config: ', e);
        return;
    }

    if(config.status !== Status.LIVE) return;

    let startTime = config.nextLive.getTime();
    let result;
    try {
        result = await Result.findOne({env: 'local', startTime: startTime})
    } catch(e) {
        logger.mongo.error('error occured while getting result: ', e);
        return;
    }
    if(!result) {
        logger.mongo.debug('status=live but no result');
        return;
    }
    let finished = saveHistory(result.results, 'local', startTime, config.contractAddress);

    if(finished) {
        try {
            await configurationService.updateStatus('local', Status.FINISHED)
        } catch(e) {
            logger.mongo.error('cannot update status from live to finished', e);
        }
    }
}

function saveHistory(results, env, startTime, contractAddress) {
    let fifth = new Array();
    let forth = new Array();
    let third = new Array();
    let second = new Array();
    let first = "";
    let besideFirst = new Array();
    let frontThree = new Array();
    let lastThree = new Array();
    let lastTwo = "";
    let finished = true;

    for(let i=0; i<2; i++) {
        for(let item=0; item<50; item++) {
            let reward = resolveRewards(results, 12*i, item);
            fifth.push(reward.reward);
            finished = finished && reward.finished;
        }
        
    }

    let i = 2;
    for(let item=0; item<50; item++) {
        let reward = resolveRewards(results, 12*i, item);
        forth.push(reward.reward);
        finished = finished && reward.finished;
    }

    i = 3;
    for(let item=0; item<10; item++) {
        let reward = resolveRewards(results, 12*i, item);
        third.push(reward.reward);
        finished = finished && reward.finished;
    }

    for(let item=10; item<15; item++) {
        let reward = resolveRewards(results, 12*i, item);
        second.push(reward.reward);
        finished = finished && reward.finished;
    }

    i = 4;
    let firstTmp = resolveRewards(results, 12*i, 0);
    first = firstTmp.reward;
    finished = finished && firstTmp.finished;

    if(firstTmp.finished) {
        let beside1 = parseInt(first) - 1;
        if(beside1 < 0) {
            beside1 = 999999;
        }
        let beside2 = parseInt(first) + 1;
        if(beside2 > 999999) {
            beside2 = 0;
        }
        besideFirst.push(("000000" + beside1).slice(-6));
        besideFirst.push(("000000" + beside2).slice(-6));
    }

    i = 5;
    for(let item=0; item<2; item++) {
        let reward = resolveRewards(results, 12*i, item);
        if(reward.reward) {
            frontThree.push(reward.reward.substring(0, 3));
        }
        finished = finished && reward.finished;
    }

    for(let item=2; item<4; item++) {
        let reward = resolveRewards(results, 12*i, item);
        if(reward.reward) {
            lastThree.push(reward.reward.substring(3, 6));
        }
        finished = finished && reward.finished;
    }

    let lastTwoTmp = resolveRewards(results, 12*i, 4);
    if(lastTwoTmp.reward) {
        lastTwo = lastTwoTmp.reward.substring(4, 6);
    }
    finished = finished && lastTwoTmp.finished;

    History.updateOne({
        env:  env,
        startTime: startTime,
        contractAddress: contractAddress,
    }, {
        first: first,
        besideFirst: besideFirst,
        second: second,
        third: third,
        forth: forth,
        fifth: fifth,
        frontThree: frontThree,
        lastThree: lastThree,
        lastTwo: lastTwo
    }, {upsert: true}, (err, writeOpResult) => {
        if(err) {
            logger.mongo.error('cannot save result to history: ', err);
        }
    });
    logger.mongo.info('successful insert result history')

    return finished;
}

function resolveRewards(results, startOffset, item) {
    if(!results) {
        return {
            reward: null,
            finished: false
        };
    }

    let unFinishedCount = 0;

    for(let i = 0; i < 12; i++) {
        if(!results[startOffset + i] || !results[startOffset + i].result || results[startOffset + i].result.length === 0 ) {
            results[startOffset + i] = blankResults;
            unFinishedCount++;
        }
    }

    if(unFinishedCount === 12) {
        return {
            reward: null,
            finished: false
        };
    }

    let reward = resolveBlock(results[startOffset].result[item], results[startOffset + 1].result[item], results[startOffset + 2].result[item],
                results[startOffset + 3].result[item], results[startOffset + 4].result[item], results[startOffset + 5].result[item],
                results[startOffset + 6].result[item], results[startOffset + 7].result[item], results[startOffset + 8].result[item],
                results[startOffset + 9].result[item], results[startOffset + 10].result[item], results[startOffset + 11].result[item]);

    return {
        reward: reward,
        finished: (reward && !reward.includes('-'))
    };
}

function resolveBlock(i01, i02, i03, i04, i05, i06, i07, i08, i09, i10, i11, i12) {
    let digit1 = isUndefined(i01) || isUndefined(i02) ? '-' : (i01 % 5) + (5 * (i02 % 2));
    let digit2 = isUndefined(i03) || isUndefined(i04) ? '-' : (i03 % 5) + (5 * (i04 % 2));
    let digit3 = isUndefined(i05) || isUndefined(i06) ? '-' : (i05 % 5) + (5 * (i06 % 2));
    let digit4 = isUndefined(i07) || isUndefined(i08) ? '-' : (i07 % 5) + (5 * (i08 % 2));
    let digit5 = isUndefined(i09) || isUndefined(i10) ? '-' : (i09 % 5) + (5 * (i10 % 2));
    let digit6 = isUndefined(i11) || isUndefined(i12) ? '-' : (i11 % 5) + (5 * (i12 % 2));
    return `${(digit1)}${(digit2)}${(digit3)}${(digit4)}${(digit5)}${digit6}`;
}

function isUndefined(arg) {
    return typeof arg === 'undefined';
}

module.exports.updateDB = updateDB;