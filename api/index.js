const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')

PORT = process.env.PORT || 5000;

main().then(() => console.log('connected to mongodb atlas')).catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}
app.use(express.json());
//requests
app.use('/api/auth', authRoute);


app.listen(PORT, () => {
    console.log('server is running')
    console.log(process.env.MONGO_URL)
})