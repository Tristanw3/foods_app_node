const express = require('express');
const auth = require('../middleware/auth');

// models
const Food = require('../models/food');

const router = new express.Router();

router.get('/api/foods', auth, async (req, res) => {
    try {
        const foods = await Food.find()
        console.log(foods)
        res.send(foods);
    } catch (e) {
        res.status(400);
        res.send();
    }
});

module.exports = router;