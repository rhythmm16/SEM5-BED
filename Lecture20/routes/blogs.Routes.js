const express=require("express");   
const router=express.Router();

router.get("/blogs",(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the blogs page"
    })
})

router.get("/:id",(req,res)=>{
    res.json({
        success:true,
        message:`one blog fetched`
    })
})

router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"blogs added succesfully"
    })
})

module.exports=router;