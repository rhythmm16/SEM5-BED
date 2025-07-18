const express = require("express"); //require is used to import modules

const app = express(); //create an instance of express

app.get("/",(req, res) => { //define a route for the root URL
    console.log(req)
    //res.send("Hello, World!"); //send a response to the client
    // res.send("<h1>Hello, World!</h1>"); //html response
    res.json({
        message: "Hello, World!" ,//JSON response
        name: "John Doe",
        age: 30,
    })
})


//PATH VARIABLES AND QUERY PARAMETERS

// through url always get request is sent
// anchor tag is used to send request

//1. Params
app.get("/users/:id",(req,res) => {//id is the param made by using colon
    console.log(req.params.id); //.id is the path valriable to access the value of id
    let id= req.params.id;
    res.send(id);
});

//2. Query Parameters- send through URL after ? and can have multiple parameters or key value pairs separated by &
app.get("/blogs",(req,res)=>{ // in query parameters, we dont write with colon
    console.log(req.query.title); //req.query is used to access query parameters and .title is the key made by us
    console.log(req.query.author);
    res.send("got it");
})

app.listen(2222, () => { //port is communication endpoint for the server
    console.log("Server is running on port 2222");
});
