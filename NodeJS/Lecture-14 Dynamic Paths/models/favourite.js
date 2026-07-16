// external modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil')

const favouriteDataPath = path.join(rootDir, 'data', 'favourite.json');

//making class
module.exports = class Favourite {

    static addToFavourite(id, callback) {
        Favourite.getFavourites((favourites) => {
            if (favourites.includes(id)) {
                console.log("Home already in favourites.");
                return callback();
            }

            favourites.push(id);

            fs.writeFile(
                favouriteDataPath,
                JSON.stringify(favourites),
                callback
            );
        });
    }

    static getFavourites(callback) {
        fs.readFile(favouriteDataPath, "utf8", (err, data) => {
            if (err) {
                return callback([]);
            }

            if (!data.trim()) {
                return callback([]);
            }

            try {
                callback(JSON.parse(data));
            } catch (error) {
                callback([]);
            }
        });
    }

    static deleteById(delHomeId, callback) {
        Favourite.getFavourites(homeIds => {
            homeIds = homeIds.filter(homeId => homeId !== delHomeId);

            fs.writeFile(
                favouriteDataPath,
                JSON.stringify(homeIds),
                callback
            );
        });
    }
};