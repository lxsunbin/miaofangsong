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