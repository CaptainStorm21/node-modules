const { createServer } = require ("http");
const { createReadStream } = require ("fs");
const PORT = 3000;

const sendFile = (res, status, type, filePath) => {
    res.writeHead(status, {"Content-Type": type});
    createReadStream(filePath).pipe(res);
};

createServer((req, res) => {
    switch(req.url){
        case "/":
                return sendFile(res, 200, "text/html", "./home-page.html");
        case "/style.css":
                    return sendFile(res, 200, "text/css", "./style.css");
        default:
            return sendFile(res, 200, "text/html", "./404.html");
    }
}).listen(PORT);

console.log(`my server is running on port ${PORT}`)
