const { loggers, format, transports } = require('winston');

const apiLabel      = "    API";
const mongoLabel    = "MongoDB";

loggers.add(apiLabel, {
    level: 'debug',
    format: format.combine(
        format.label({ label: apiLabel }),
        format.colorize(),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`)
    ),
    transports: [new transports.Console()]
});

loggers.add(mongoLabel, {
    level: 'debug',
    format: format.combine(
        format.label({ label: mongoLabel }),
        format.colorize(),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`)
    ),
    transports: [new transports.Console()]
});

module.exports.api = loggers.get(apiLabel);
module.exports.mongo = loggers.get(mongoLabel);