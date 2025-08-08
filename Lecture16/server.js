const express=require("express")
const app=express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post("/user",(req,res)=>{
    console.log("aaaaa")
    try{
    let email=req.body.email;
    let password=req.body.password;
    console.log(email,password)
    res.json({
        success:true,
        message:"User added successfully",
        data:{
            email,
            password
        }
    })
    }catch(error){
        res.json({
            success:false,
            message:"User not added",
            error:error.message
        })
    }
    
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
