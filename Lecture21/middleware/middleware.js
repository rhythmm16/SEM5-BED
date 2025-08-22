mongoose.connect("mongodb://127.0.0.1:27017/blogapp2")
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err.message)
})
app.listen(5445,()=>{
    console.log("server started")
})