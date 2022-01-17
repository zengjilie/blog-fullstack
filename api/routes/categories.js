const router = require('express').Router();
const Category = require('../models/Category');

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const newCategory = new Category(req.body);
        for (const cat of req.body) {
            const newCate = JSON.stringify({ name: cat });
            console.log(JSON.stringify({ name: cat }));
            const createdCategory = await newCategory.save(newCate);
            res.status(200).json(createdCategory);
        }
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