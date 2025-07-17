const fs=require("fs")
fs.readFile("../users.txt","utf-8",function(err,data1){
    if(err)return console.log(err);
    fs.readFile("../users2.txt","utf-8",function(err,data2){
        if(err)return console.log(err);
        fs.writeFile("./allUsers.txt",data1+data2,function(err){
            if(err)return console.log(err);
            console.log("All users written successfully");
        });
    });
});