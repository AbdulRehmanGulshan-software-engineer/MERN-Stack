// My SQL database
const db = require("../utils/databaseUtil");

//making class
module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl, description, id) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
        this.description = description;
        this.id = id;
    }

    save() {
        return db.execute(
            `INSERT INTO homes
        (houseName, price, location, rating, photoUrl, description)
        VALUES (?, ?, ?, ?, ?, ?)`,
            [
                this.houseName,
                this.price,
                this.location,
                this.rating,
                this.photoUrl,
                this.description
            ]
        );
    }


    update() {
        return db.execute(
            `UPDATE homes
         SET houseName = ?,
             price = ?,
             location = ?,
             rating = ?,
             photoUrl = ?,
             description = ?
         WHERE id = ?`,
            [
                this.houseName,
                this.price,
                this.location,
                this.rating,
                this.photoUrl,
                this.description,
                this.id
            ]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM homes')
    }

    static findById(id) {
        return db.execute("SELECT * FROM homes WHERE id = ?", [id]);
    }

    //static method that will take id and delete home
    static deleteById(id) {
        return db.execute("DELETE FROM homes WHERE id = ?", [id]);
    }
}