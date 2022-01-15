const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');
const multer = require('multer');

PORT = process.env.PORT || 5000;

main().then(() => console.log('connected to mongodb atlas')).catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}
app.use(express.json());
//
app.use('/api/auth', authRoute);

app.use('/api/users', userRoute);

app.use('/api/posts', postRoute);

app.use('/api/categories', categoriesRoute);

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