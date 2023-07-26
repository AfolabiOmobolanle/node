var express = require ("express");

const users = require("./usersList.json");
var router = express.Router();

   

router.get("/getAllUsers",(_req,res)=>{
    try {
        res.send(users)
        
    } catch (error) {
        console.log(error);
    }

})

router.post("/createUser",(req,res)=>{
    try {
        res.send(users)
        
    } catch (error) {
        console.log(error);
    }
})

module.exports.router = router;