const fs=require('fs');
console.log(fs);
console.log("start");

setImmediate(() => {
    console.log("set immediate");
})
setTimeout(() => {
    console.log("set timeout"); //only after the timer is experired
},0)
fs.readFile("demo.txt", "utf-8", (data) => { //checks if the file is ready, if ready then gets executed and prints immediate 2 first and then timer 2 else shifts to setImmediate
    console.log("file read");
    setTimeout(() => {
        console.log("timer 2");
    },0)
    setImmediate(() => {
        console.log("immediate 2");
    })
})
console.log("end");