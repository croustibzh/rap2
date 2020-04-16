const express = require('express');
const cors = require('cors');
const Router = express.Router();
Router.use(cors());

Router.get('/', (req,res)=>{
    res.send("Router up and running on 5000");
    
});

module.exports = Router;