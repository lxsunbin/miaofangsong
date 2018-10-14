const http=require('http');
const fs=require('fs');
const urlLib=require('url');

var server=http.createServer(function(req,res){
    var obj=urlLib.parse(req.url,true);
    const url=obj.pathname;
    var fileName='./assets'+url;
    fs.readFile(fileName,function(err,data){
        if (err){
            res.write('404');
        }else {
            res.write(data)
        };
        res.end()
    })
});
server.listen(8081)



/*const express=require('express');
const static=require('express-static');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const multer=require('multer');
const multerObj=multer({dest:'./static/upload'})
const mysql=require('mysql');

var server=express();
server.listen(8081);

//1.获取请求数据
//get自带
server.use(multerObj.any());
server.use(bodyParser.urlencoded());
//2.cookie,session
server.use(cookieParser());
(function(){
    var keys=[];
    for(var i=0;i<100000;i++){
        keys[i]="user_"+Math.random();
    };
    server.use(cookieSession({
        name:'session',
        keys:keys,
        maxAge:20*60*1000 //20min
    }));
})();
//3.接口
var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'miaofangsong'});
var router=express.Router();
    //获取主播体重
server.get('/get_weight',(req,res)=>{
    db.query(`SELECT * FROM weight_table`,(err,data)=>{
        if(err){
            console.error(err);
            res.status(500).send('database error').end();
        }else{
            res.send(data).end();
        }
    });
});
//4.default:static
server.use(static('./assets/'));*/
