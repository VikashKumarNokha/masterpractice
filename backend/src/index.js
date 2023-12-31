const express = require("express")

const cors = require("cors");

const app = express();

 app.use(cors());
 app.use(express.json());

 const connect = require("./configs/db");
 const productControllers = require("./controllers/product.controller")


  app.get("/", (req, res)=>{
       return res.status(200).send("hello server");
  })

 
  app.use("/products", productControllers )   


 app.listen(5000, async ()=>{
    try {
         connect();
        console.log("server running on port 5000");
    } catch (error) {
       console.log("err", error); 
    }
 })
