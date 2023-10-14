const router = require("express").Router();

const productModel = require("../models/products.model")


router.get("/", async (req, res)=>{
       try {

        let search = req.query.search || "" ;
        let filterBy = req.query.categary || "All"
        let sortBy = req.query.sortBy || "ratting" ;
        let sortOrder = req.query.sortOrder || "asc";
        let page = parseInt( req.query.page ) -1 || 0 ;
        let limit = req.query.limit || 2;

        
         let categoryOption = ["action", "fight", "jump", "run", "gadder", "love" ] ;

           filterBy == "All" ?  filterBy = [...categoryOption]  : filterBy = filterBy.split(","); 
           let obj = {};
           obj[sortBy] = sortOrder ;
         
        const data = await productModel.find({ title : { $regex: search, $options: "i" } })
        .where("categary").in([...filterBy])
        .sort(obj).skip(page*limit).limit(limit);

        let Totalpage = Math.ceil((await productModel.find({ title : { $regex: search, $options: "i" } }).where("categary").in([...filterBy])).length / limit)
       
         return res.status(200).send({data, Totalpage});

       } catch (error) {
         res.status(400).send({err : error})
       }
})

module.exports = router;