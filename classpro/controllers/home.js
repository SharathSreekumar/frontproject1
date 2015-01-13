var userController = require('../controllers/users');

exports.getProfile=function(request,response){
    console.log(getUser);
    var user=userController.getUser(request.params.id);
    response.render('profile',{
        title:"Home",
        user:user ,
    });
}

exports.getIndex=function(request,response){
    response.render('index',{
        title:"Home",
        users:userController.getUsers
    });
}