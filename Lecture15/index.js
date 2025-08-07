const express=require("express")
const app=express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));
app.post('/adduser',(req,res)=>{
        let email=req.body.email;
        let password=req.body.password;
        let newUser={
            email,
            password
        }
  console.log(email, password);
  //res.send("User added successfully");
  res.json({
    success: true,
    message: "User added successfully",
    data
  })
})

app.listen(4443,()=>{
    console.log("server started")
})