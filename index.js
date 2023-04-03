const http = require('http');
var msg;
const server = http.createServer((request, response) => {
    msg = " URI = " + request.url;
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(msg);
    response.end();
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
