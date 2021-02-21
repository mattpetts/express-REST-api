// get the data from a json file
const path = require('path');
const uuid = require('uuid');
const fs = require('fs');
let houses = require(path.join(__dirname, 'data', 'houses.json'),);

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(houses)
    });
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const house = houses.find((h) => h.id === id);
        resolve(house)
    });
}

function createHouse(req, res) {
    return new Promise((resolve, reject) => {
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
}

module.exports = {
    findAll,
    findById,
    createHouse
}