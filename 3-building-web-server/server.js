const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead( 200, {"Content-Type": "text/plain"});
    // res.end('Hello world')
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!doctype html>
                <html>
                    <head>
                    <title>server html page</title>
                    </head>
                    <body>
                        <p>this is html section</p>
                        <p>method: ${req.method}</p>
                        <p>url: ${req.url}</p>
                    </body>
                </html>
    `);
  })
  .listen(3000);

console.log("web server is listening");
