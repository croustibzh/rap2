
const mongoose = require('mongoose');



    // const uri = 'mongodb+srv://user:user@cluster0-n7lzl.mongodb.net/test?retryWrites=true&w=majority' older
    //mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    const uri ="mongodb+srv://gbcacdmin:gbcadmin@cluster0-qy7rd.mongodb.net/test?retryWrites=true&w=majority";
    var db = mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
        if (err) console.log("Connection to DB failed: ", err);
        console.log('Success connecting to database');
    });

module.exports = db;