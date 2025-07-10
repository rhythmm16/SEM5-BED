let account_balance=200000;
let products=[{
    name:"samsung",
    amount:70000,
    quantity:10
},{
    name:"IPhone 16",   
    amount:100000,
    quantity:1
}]

// function buyProduct(product_name,callback) {
//     //some async operation
//     //1. get product detail from product db
//     //2. write order detail in user db
//     setTimeout(() => {
//         console.log(`Product bought successfully!`)
//         callback();
//     })
// }


//console.log("Order placed for iPhone 14 Pro Max")
function buyProduct(product_name,callback) {
    let isprodcut=null;
   //implement for loop to find product in an array
   //find product object from products array whose name is equal to product_name
   for(let i=0;i<products.length;i++){
        //console.log(products[i].name==product_name);
        if(products[i].name==product_name){
            isprodcut=products[i];
        }
    }
if(!isprodcut){
    callback("Product not available",null);
}else{
    callback(null,isprodcut.amount);
    callback(null,isprodcut.amount);
}
}
function deductAmount(amount,cb){
    if(amount>account_balance){
        cb("your account balanace is low",null)
    }else{
        account_balance-=amount;
        cb(null,"your product is purchased")
        
    }

}


buyProduct("Iphone 16",function(err,amount){
    // console.log("Order placed for iPhone 14 Pro Max");
    if(err) return console.log(err);
    console.log(amount)
    deductAmount(amount,function(err,message){
        if(err) return console.log(err);
        console.log(message)
        console.log(account_balance);
    });
})

//problems in callback
//1. Callback hell- nested callbacks, therefore code readability is reduced
//2. Don't have control over the flow of execution