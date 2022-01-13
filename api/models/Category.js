const mongoose = require('mongoose');

const CategorySchema = new mongoose.Scheme({
    name:{
        type:String,
        required:true,
    }
}, { timestamp: true })

module.export = mongoose.model('Category',CategorySchema);