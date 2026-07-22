/*

*
save()
find()
findById()
update()
deleteById()
*

*/

const mongoose = require('mongoose');

//making schema
// _id is automatically added by mongoose
const homeSchema = new mongoose.Schema({
    houseName: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    location: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    photoUrl: String,
    description: String
});

module.exports = mongoose.model("Home", homeSchema);