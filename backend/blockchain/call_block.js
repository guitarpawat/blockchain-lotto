const State = require('./state');
const logger = require('../logger');

class CallBlock {
    constructor(offset, size) {
        this.offset = offset;
        this.size = size;
        this.results = null;
        this.executeAt = NaN;
        this.confirmAt = NaN;
        this.state = State.PENDING_CALL;
        this.retries = 0;
    }

    callContract() {
        if(this.state === State.PENDING_CALL) {
            this.state = State.PENDING_EXECUTE;
            logger.blockchain.info(`call block offset: ${this.offset}, retries: ${this.retries}, was called`);
        }
    }

    executeContract(atBlock) {
        if(this.state === State.PENDING_EXECUTE) {
            this.executeAt = atBlock;
            this.state = State.EXECUTED;
            logger.blockchain.info(`call block offset: ${this.offset}, retries: ${this.retries}, was executed at block ${atBlock}`);
        }
    }

    confirmResult(atBlock) {
        if(this.state === State.EXECUTED) {
            this.confirmAt = atBlock;
            this.state = State.CONFIRMED;
            logger.blockchain.info(`call block offset: ${this.offset}, retries: ${this.retries}, was confirmed at block ${atBlock}`);
        }
    }

    setComplete() {
        if(this.state === State.CONFIRMED) {
            this.state = State.COMPLETED;
            logger.blockchain.info(`call block offset: ${this.offset}, retries: ${this.retries}, was completed`);
        }
    }

    executeOnInvalidBlock() {
        if(this.state !== State.CONFIRMED && this.state !== State.COMPLETED) {
            this.state = State.INVALID_BLOCK;
            logger.blockchain.warn(`call block offset: ${this.offset}, retries: ${this.retries}, was executed on an invalid block`);
        }
    }

    duplicateExecution() {
        if(this.state !== State.CONFIRMED && this.state !== State.COMPLETED) {
            this.state = State.DUPLICATE_EXECUTION;
            logger.blockchain.warn(`call block offset: ${this.offset}, retries: ${this.retries}, was duplicate with others`);
        }
    }

    resetOnError() {
        if(this.state !== State.CONFIRMED && this.state !== State.COMPLETED) {
            this.retries++;
            this.state = State.PENDING_CALL;
            logger.blockchain.warn(`call block offset: ${this.offset}, retries: ${this.retries - 1}, was reset to pending call due to an error`);
        }
    }
}

module.exports = CallBlock;