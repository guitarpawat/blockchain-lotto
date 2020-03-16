const state = {
    PENDING_CALL: 1,
    PENDING_EXECUTE: 2,
    EXECUTED: 3,
    CONFIRMED: 4,
    COMPLETED: 9,
    INVALID_BLOCK: -1,
    DUPLICATE_EXECUTION: -2
};

Object.freeze(state);

module.exports = state;