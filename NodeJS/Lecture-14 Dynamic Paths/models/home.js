// external modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const Favourite = require('./favourite');

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
        Home.fetchAll((registeredHomes) => {
            if (this.id) {   //edit home case
                registeredHomes = registeredHomes.map(home =>
                    home.id === this.id ? this : home)
            }
            else {   //add home case
                this.id = crypto.randomUUID().toString();
                registeredHomes.push(this);
            }
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

    //static method that will take id and delete home
    static deleteById(homeId, callback) {
        this.fetchAll(homes => {
            homes = homes.filter(home => home.id !== homeId);
            fs.writeFile(homeDataPath, JSON.stringify(homes), error =>
                Favourite.deleteById(homeId, callback)
            );
        })
    }
}