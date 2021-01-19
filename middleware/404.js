const notFound = (req, res, next) => {
    res.status(404).json({message: 'Route is not valid'});
    next();
}

module.exports = notFound;