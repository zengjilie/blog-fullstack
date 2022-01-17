const router = require('express').Router();
const Category = require('../models/Category');

router.post('/', async (req, res) => {
    try {
        await Category.insertMany(req.body.data);
        res.status(200).json('insert success');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const allCategories = await Category.find();
        res.status(200).json(allCategories);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;