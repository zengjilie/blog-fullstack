const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');
const multer = require('multer');
var cors = require('cors');
const path = require('path');

var PORT = process.env.PORT || 5000;
//connect to mongodb
main().then(() => console.log('connected to mongodb atlas')).catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}
//enable cors
var corsOptions = {
    orgin:'http://localhost:3000',
    optionsSucessStatus:200,
}
app.use(cors());
//make images file public
app.use('/images',express.static(path.join(__dirname,'images')));

app.use(express.json());
//authentication
app.use('/api/auth', authRoute);
//users
app.use('/api/users', userRoute);
//posts
app.use('/api/posts', postRoute);
//categories
app.use('/api/categories', categoriesRoute);

//greeting page
app.get('/', (req,res)=>res.status(200).send('Hello World'))
//image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name)
    }
})
const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    res.status(200).json('File has been uplaoded');
})

app.listen(PORT, () => {
    console.log('server is running')
    console.log(process.env.MONGO_URL)
})