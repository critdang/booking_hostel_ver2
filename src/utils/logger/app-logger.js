const winston = require('winston');
const fs = require('fs');
const {
  format
} = require('winston');
const config = require('../../config/config');
require('winston-daily-rotate-file');

const dir = config.logger.path;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const logger = winston.createLogger({

  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.prettyPrint()
  ),
  transports: [
    new (winston.transports.Console)({
      colorize: true,
    }),
    new winston.transports.DailyRotateFile({
      filename: config.logger.fileName,
      dirname: config.logger.path,
      maxsize: 20971520, // 20MB
      maxFiles: 25,
      datePattern: '.dd-MM-yyyy'
    })
  ]
});

module.exports = logger;
