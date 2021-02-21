const House = require('../models/House');

async function getHouses (req, res) {
    const houses = await House.findAll();
    res.status(200).json(houses)
}

async function getSingleHouse (req, res) {
    const house = await House.findById(req.params.id);

    if (house) {
        res.status(200).json(house)
    } else {
        res.status('404').json({message: `There is no house in Westeros with the id: ${req.params.id}`})
    }
}

async function createHouse (req, res) {
    const house = await House.createHouse(req, res);

    if (house) {
        res.status(200).json(house)
    } else {
        res.status(500).json({message: `Something went wrong`})
    }
}

async function updateHouse () {

}

async function deleteHouse () {

}

module.exports = {
    getHouses,
    getSingleHouse,
    createHouse,
    updateHouse,
    deleteHouse
} 