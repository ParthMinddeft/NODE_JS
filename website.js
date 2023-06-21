const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000 ;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html')
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if(req.url == '/asd'){
        res.statusCode = 200;
        res.end('<h1>About Parth</h1> <p> Hello How Are You! </p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>This is Parth</h1> <p> Hey How Are You! </p>');
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Not Found</h1> <p> Hello this page was not found on this server </p>');
    }
    
})

server.listen(port,()=> {
    console.log(`Server is listening on port ${port}`);
});