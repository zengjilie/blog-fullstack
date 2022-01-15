const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//register
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password, salt);
        console.log(hashpassword);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashpassword,
        });
        const user = await newUser.save();

        res.status(200).json(user);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json('wrong credentials');

        const validate = bcrypt.compare(req.body.password, user.password);
        !validate && res.status(400).json('wrong credentials');

        //send everything to user but password
        const { password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;