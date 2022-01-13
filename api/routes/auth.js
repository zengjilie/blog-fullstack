const router = require('express').Router();
const User = require('../models/User');

//register
router.post('/register', async (req, res) => {
    console.log(User);
    try {
        console.log(req.body);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        const user = await newUser.save();
        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;