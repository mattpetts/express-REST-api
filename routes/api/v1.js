const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

// get the data from a json file
const houses = require(path.join(__dirname, 'data', 'houses.json'),);



// Gets all data
router.get('/', (req, res) => {
    res.json(houses)
});

// Get by id
router.get('/:id', (req, res) => {
    const house = houses.find((h) => h.id === parseInt(req.params.id));

    if (house) {
        res.status(200).json(house)
    } else {
        res.status(404).json({message: `There is no house in Westeros with the id: ${req.params.id}`})
    }
});

// write to the json file
router.post('/', (req, res) => {
    //new house submitted
    const newHouse = {
        id: uuid.v4(),
        name: req.body.name,
        home: req.body.home,
        banner: req.body.banner
    }

    //run some valiadtion
    if (!req.body.name || !req.body.home || !req.body.banner) {
        res.status(400).json({message: `Bad Request: Please include all required parameters`})
    } else {
         // Write to the data file
        //Push the new product to our array
        houses.push(newHouse);

        //Filesystem - overwrite the json file
        fs.writeFileSync(path.join(__dirname, 'data', 'houses.json'), JSON.stringify(houses), 'utf8', (err) => {
            if (err) throw err;
        });

        res.status(200).json({message: `House ${req.body.name} added with id ${newHouse.id}`, houses});
    }
});


module.exports = router;