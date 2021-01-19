// get the data from a json file
const path = require('path');
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

module.exports = {
    findAll,
    findById
}