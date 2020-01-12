const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cost: {
        type: Number,
        required: true,
    }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;