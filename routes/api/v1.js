const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const fs = require('fs');
const { getHouses, getSingleHouse, createHouse, updateHouse, deleteHouse } = require('../../controllers/HousesController')


// Gets all data
router.get('/', (req, res) => {
    getHouses(req, res);
});

// Get by id
router.get('/:id', (req, res) => {
    getSingleHouse(req, res);
});

// write to the json file
router.post('/', (req, res) => {
    createHouse(req, res)
});

// update a record in the json file
router.put('/:id', (req, res) => {
    const house = houses.find((h) => h.id === req.params.id);

    if (house) {
        // run the update
        const newHouse = {
            id: house.id,
            name: req.body.name || house.name,
            home: req.body.home || house.home,
            banner: req.body.banner || house.banner
        }

        const index = houses.findIndex((h) => h.id === house.id);
        houses[index] = newHouse;

        //Filesystem - overwrite the json file
        fs.writeFileSync(path.join(__dirname, 'data', 'houses.json'), JSON.stringify(houses), 'utf8', (err) => {
            console.log(err)
        });

        res.status(200).json({message: `Record with ${house.id} has been updated`, houses})
    } else {
        res.status(404).json({message: `There is no house in Westeros with the id: ${req.params.id}`})
    }
});

router.delete('/:id', (req, res) => {

    const house = houses.find((h) => h.id === req.params.id);

    if (house) {

        houses = houses.filter((h) => h.id !== req.params.id);

        //Filesystem - overwrite the json file
        fs.writeFileSync(path.join(__dirname, 'data', 'houses.json'), JSON.stringify(houses), 'utf8', (err) => {
            console.log(err)
        });

        res.status(200).json({message: `Record with ${house.id} has been deleted`, houses});
    } else {
        res.status(404).json({message: `There is no house in Westeros with the id: ${req.params.id}`})
    }
});

module.exports = router;