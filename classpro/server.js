var express=require('express');
var hbs=require('hbs');
var path=require('path');
var bodyParser=require('body-parser');
//User model
var userController=require('./controllers/users');   // since the hirarchy of this file & users is same i.e.'j.s' hence not needed.
var app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
{
    extended:false
}));

app.use(express.static('public'));

//Routes
app.get('/',userController.getIndex);

/*
app.get('/users/:id',function(request,response){
    //console.log(users.getUser);
    var user=users.getUser(request.params.id);
    response.render('index',{
        title:"Home",
        user:user
    });
});
*/
app.get('/users/:id',userController.getProfile);

app.get('/login',userController.getLogin);

app.post('/login',userController.postLogin);

app.get('/signup',userController.getSignup);

app.get('/about',userController.getAbout);

app.listen(3000);