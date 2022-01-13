const mongoose = require('mongoose');

const PostSchema = new mongoose.Scheme({
    title:{
        tyle:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
    }

}, { timestamp: true })

module.export = mongoose.model('Post', PostSchema);