const moment = require('moment');

const logger = (req, res, next) => {
    console.log(`${moment().format()} : ${req.path}`);
    next();
}

module.exports = logger;
