const express = require('express');
const router = express.Router();
const uuid = require('uuid');

// get the data from a json file
const houses = require('../../Houses');

// Gets all data
router.get('/', (req, res) => {
    console.log('test')
    res.json(houses)
});

// Get by id
router.get('/:id', (req, res) => {
    const search = houses.some(house => house.id === parseInt(req.params.id));

    if (search) {
        res.json(houses.filter(house => house.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({message: `There is no house in Westeros with the id: ${req.params.id}`})
    }
})


module.exports = router;