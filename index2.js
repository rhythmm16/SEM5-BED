const fs=require('fs');
console.log(fs);
console.log("start");

setImmediate(() => {
    console.log("set immediate");
})
setTimeout(() => {
    console.log("set timeout"); //only after the timer is experired
},0)
fs.readFile("demo.txt", "utf-8", (err,data) => { //checks if the file is ready, if ready then gets executed and prints immediate 2 first and then timer 2 else shifts to setImmediate
    console.log("file read");
    console.log(data);
    setTimeout(() => {
        console.log("timer 2");
    },0)
    setImmediate(() => {
        console.log("immediate 2");
    })
})
function someTask() {
    return new Promise ((resolve, reject) => {
        resolve("promise resolved");
    })
}
someTask().then((data) => {
    console.log(data)
})
.catch((err) => {
})

process.nextTick(() => { // nexttick has the highest priority, it will be executed before any other callback
    console.log("next tick");
})
console.log("end");