const { loggers, format, transports } = require('winston');

const apiLabel = "API";

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

module.exports.api = loggers.get(apiLabel);