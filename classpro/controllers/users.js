var userModel = require('../models/Users.old');

exports.getUserById = function(request,response){
    var user=getUser(request.params.id);
    response.render('profile',{
        title:"User Profile", user:user
    });
}

exports.getUsers=function(){
    return userModel.users;         //userModel.users =>    require('../models/Users.js').users
}

exports.getUser=function(id){
    for(var i=0;i<userModel.users.length;i++) {
        if(userModel.users[i].id==id)
            return userModel.users[i];
    }
}

getUserAuth=function(username,password){
    for(var i=0;i<userModel.users.length;i++) {
        if(userModel.users[i].username==username && userModel.users[i].password==password)
            return userModel.users[i];
    }
    return 0;
}

exports.getLogin=function(request,response){
    response.render('login',{
        title:"Login",
    });
}

exports.postLogin=function(request,response){
    console.log(request.body.uses);
    //response.send("Send Data"+request.body.uses+request.body.pass);
    var user1=getUserAuth(request.body.uses,request.body.pass);
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