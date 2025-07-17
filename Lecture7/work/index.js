// const fs=require("fs")

// fs.readFile("../users.txt","utf-8",function(err,data1){
//     if(err)return console.log(err);
//     let user1=JSON.parse(data1)
//     console.log(user1) // Parse the JSON string into an object
//     fs.readFile("../users2.txt","utf-8",function(err,data2){
//         if(err)return console.log(err);
//         let user2=JSON.parse(data2) 
//         let allusers=user1.concat(user2);// Parse the JSON string into an object
//         console.log(allusers);
//         fs.writeFile("./allUsers.txt",JSON.stringify(allusers),function(err){
//             if(err)return console.log(err);
//             console.log("All users written successfully");
//         });
//     });
// });

async function task(file1,file2,file3){
    let user1=await read(file1);
    console.log(user1);
    let user2=await read(file2);
    // let a=JSON.parse(user1);
    // let b=JSON.parse(user2);
    let allusers=user1.concat(user2);
    let mes=await write(file3,JSON.stringify(allusers));
    console.log(mes);
}
task("../users.txt","../users2.txt","./allUsers2.txt");