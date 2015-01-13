var userModel = require('../models/Users');

getUsers=function(){
    return userModel.users;         //userModel.users =>    require('../models/Users.js').users
}

getUser=function(id){
    for(var i=0;i<userModel.users.length;i++) {
        if(userModel.users[i].id==id)
            return userModel.users[i];
    }
}

getUserN=function(username,password){
    for(var i=0;i<userModel.users.length;i++) {
        if(userModel.users[i].username==username && userModel.users[i].password==password)
            return userModel.users[i];
    }
    return 0;
}

exports.getIndex=function(request,response){
    response.render('index',{
        title:"Home",
        users:getUsers
    });
}

exports.getProfile=function(request,response){
    console.log(getUser);
    var user=getUser(request.params.id);
    response.render('profile',{
        title:"Home",
        user:user ,
    });
}

exports.getLogin=function(request,response){
    response.render('login',{
        title:"Login",
    });
}

exports.postLogin=function(request,response){
    console.log(request.body.uses);
    //response.send("Send Data"+request.body.uses+request.body.pass);
    var user1=getUserN(request.body.uses,request.body.pass);
    console.log(user1.id);
    if(user1)
    {
            response.send("Welcome "+user1.name);
    }
    else
        response.send("Send Data"+"incorrect");
}

exports.getSignup=function(request,response){
    response.render('signup',{
        title:"Signup"
    });
}

exports.getAbout=function(request,response){
    response.render('about',{
        title:"About us"
    });
}