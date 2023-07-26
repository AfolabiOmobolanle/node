var express =require('express');
const {router} =require("./routes/products");
const cors = require("cors");
const dotenv = require("dotenv");
var app = express();


// typical example of REST API (to GET)
// app.get("/users",(req,res)=>{
    // console.log("holla amigo");
    // res.status(500).json({
        //     message: "Where are you?"
        // });
        // })
        
        
dotenv.config();
app.use(cors());
app.set("view engine","ejs")

app.use("/api/v1", router)




// app.get("/users",(req,res)=>{
//     console.log("holla amigo");
//     res.render("index",{text: "world"});
//     })

const port = process.env.PORT || 2022

app.listen(port,()=>{
    console.log("this server is up and running!!!");
})