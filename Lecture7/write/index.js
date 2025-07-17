const fs=require("fs")
let users=[
    {
        id:1,
        name:"RJ",
        age:"21"
    },
    {
        id:2,
        name:"RR",
        age:"20"
    },
]
fs.writeFile("../users2.txt",JSON.stringify(users),function(err){ // Convert the object to a JSON string
    if(err)return console.log(err);
    console.log("File written successfully");   
})