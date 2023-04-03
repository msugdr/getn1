const http = require('http');
var msg;
const server = http.createServer((request, response) => {
    msg = "<h1>ELENA</h1> URI = " + request.url + "<br>process.env.PORT = " + process.env.PORT;
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(msg);
    response.end();
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
