const http = require('http');
const app = http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/html; charset = utf-8" })

    if(req.url === "/"){
        res.end(".here is root");
    } else if (req.url === "/login"){
        res.end("here is login.");
    }
});

app.listen(3001,()=> {
    console.log('http로 가동된 서버입니다.')
})