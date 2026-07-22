/*
Mongoose Model Methods:

Create:
new Home({...})
home.save()

Read:
Home.find()
Home.findById(id)
Home.findOne({...})

Update:
Home.findByIdAndUpdate(id, {...})
Home.updateOne({...}, {...})

Delete:
Home.findByIdAndDelete(id)
Home.deleteOne({...})

Validation:
required
min
max
minLength
maxLength
enum
match
*/

const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    houseId: {
        type: String,
        ref: "Home",
        required: true
    }
});

module.exports = mongoose.model('Favourite', favouriteSchema);

// now we can use Mongoose's built-in models methods
