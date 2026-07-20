const { getDB } = require("../utils/databaseUtil");
const { ObjectId } = require("mongodb");

//making class
module.exports = class Favourite {

    constructor(houseId) {
        this.houseId = houseId;
    }

    save() {
        const db = getDB();

        return db.collection("favourites")
            .findOne({ houseId: this.houseId })
            .then(existingFavourite => {
                if (existingFavourite) {
                    return existingFavourite; // already exists
                }

                return db.collection("favourites").insertOne(this);
            });
    }

    static getFavourites() {
        const db = getDB();
        return db.collection('favourites').find()
            .toArray()
    }

    static deleteById(homeId) {
        const db = getDB();
        return db.collection("favourites")
            .deleteOne({ houseId: homeId });
    }
};