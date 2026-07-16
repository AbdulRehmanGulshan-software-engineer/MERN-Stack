// external modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil')

const homeDataPath = path.join(rootDir, 'data', 'homes.json');

//making class
module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save() {
        this.id = crypto.randomUUID().toString();
        Home.fetchAll((registeredHomes) => {
            registeredHomes.push(this);
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err) => {
                console.log(err);
            });
        })
    }

    static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
        if (err) {
            return callback([]);
        }

        if (!data.length) {
            return callback([]);
        }

        callback(JSON.parse(data));
    });
}
    static findById(homeId, callback) {
        //first get all the houses then search from them (this is good just for now)
        this.fetchAll(homes => {
            const homeFound = homes.find(home => home.id.toString() === homeId.toString());
            callback(homeFound);
        })
    }
}