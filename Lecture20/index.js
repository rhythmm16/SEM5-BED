const express=require("express");
const{m1,m2, checkAdmin}=require("./middleware/middleware");
const app=express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const blogRoutes=require("./routes/blogs.Routes");
app.use(m1);
//app.use(m2);

app.get("/home",(req,res,next)=>{
    console.log("running controller home page");
    res.json({
        success:true,
        message:"welcome to my home page"
    })
});
app.use(m2);
app.get("/dashboard",checkAdmin,(req,res)=>{
    if(req.isAdmin){
        return res.json({
            success:true,
            message:"welcome to the admin dashboard"
        })
    }
    return res.json({
        success:false,
        message:"you are not authorized to access this page"
    })
})

app.use("/api/blogs",blogRoutes);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
