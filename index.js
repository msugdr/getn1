const http = require('http');
const request = require("request");
const msg ="Dear YouNa, I Love You and Elena! Request";
const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(msg);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
