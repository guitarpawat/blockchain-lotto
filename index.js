const mongoose = require('mongoose')
const expressRouter = require('./backend/router');
const blockchain = require('./backend/blockchain/controller');

const logger = require('./backend/logger');

mongoose.connect('mongodb://localhost:27017/lotto', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    logger.mongo.info('connected to MongoDB');
    expressRouter.start();
    blockchain.start();
})
.catch((err) => console.log(`error occured: ${err.stack}`))