function m1(req,res,next){
    console.log("running middleware m1")
    req.user={
        id:1,
        username:"Rhythm"
    }
    next()
}

function m2(req,res,next){
    console.log("running middleware m2")
    console.log(req.user);
    // req.isAdmin=true
    next()
}

function checkAdmin(req,res,next){
    let{name}=req.query;
    if(name==="Rhythm"){
        req.isAdmin=true
        return next()
    }
    res.json({
        success:false,
        message:"you are not authorized to access this page"
    })
}

function IsLogin(req,res){
   
        console.log("you are not logged in")
}

module.exports.m1=m1;
module.exports.m2=m2;
module.exports.checkAdmin=checkAdmin;
module.exports.IsLogin=IsLogin;