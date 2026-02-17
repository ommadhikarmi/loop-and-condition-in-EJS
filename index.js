import express from 'express';
const app = express();

app.use(express.urlencoded({extended:false}))
app.get('/',(req,resp)=>{
    resp.send('welcome')
});

app.set('view engine','ejs')
app.get('/addUser',(req,resp)=>{
    resp.render('addUser')
});

app.post('/submitUser',(req,resp)=>{
    //console.log(req.body)
    resp.render('submitUser',req.body)
});

app.get('/users',(req,resp)=>{
    let users=['one','two','three']
    const islogin= true;
    resp.render('users',{users:users, islogin:islogin})
});

app.listen(2000);