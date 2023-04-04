const http = require('http');
const port = process.env.PORT || 1337;
var msg;
const server = http.createServer((request, response) => {
    msg = `<h1 style='color:red;'>ELENA</h1><img src='http://chodoin.deci.jp/pic/girl5.jpg'><br> URI = ` + request.url + "<br>process.env.PORT = " + process.env.PORT;
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(msg);
    response.end();
});

server.listen(port);

// console.log("Server running at http://localhost:%d", port);
