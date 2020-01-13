const express = require('express');
const auth = require('../middleware/auth');

// models
const Order = require('../models/order');
const User = require('../models/user');

const router = new express.Router();

// create: async (req, res) => {

//     console.log(req.params);
//     user = req.params;
//     id = user.id;
//     const { title, subtitle } = req.body;
//     const post = await Post.create({
//         title,
//         subtitle,
//         user: id
//     });
//     await post.save();

//     const userById = await User.findById(id);

//     userById.posts.push(post);
//     await userById.save();

//     return res.send(userById);
// },


router.post('/orders/create', auth, async (req, res) => {
    console.log('xxxxx')
    console.log(req.body.body)
    const order = new Order({
        "products": req.body.foods,
        "user": req.body.userId,
        "cost": req.body.cost
    })



    try {
        await order.save();
        res.status(201);
        res.send("Order added");
    } catch (e) {
        console.log("Failed to add order");
        res.status(400);
        res.send(e);
    }
});

router.get('/orders', async (req, res) => {
    try {
        const single = await Order.findOne({ cost: 20 })
        single.populate('user').execPopulate(function (err) {
            console.log(single.user.email)
        })

        res.send({ orders });
    } catch (e) {
        res.status(400);
        res.send();
    }
});


module.exports = router;