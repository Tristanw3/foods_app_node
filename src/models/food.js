const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    cost: {
        type: Number,
        required: true,
    },
    image: {
        type: String,

    },
    background: {
        type: String,
        default: 'pink'
    }
})

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;