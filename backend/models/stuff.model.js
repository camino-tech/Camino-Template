const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// template schema is a schema for the stuffs collection
// in meteor application template.
const stuffSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    // the price of the item can be 0-100$
    quantity: {
        type: Number,
        min: 0,
        max: 100,
    },
    // the condition can only be one of the things in the array
    condition: {
        type: String,
        enum: ['excellent', 'good', 'fair', 'poor'],
    }
}, {
    timestamps: true,
});

const Stuff = mongoose.model('Stuff', stuffSchema);

module.exports = Stuff;
