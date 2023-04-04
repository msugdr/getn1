const http = require('http');
var fs = require('fs');
const port = process.env.PORT || 1337;
var msg;
const server = http.createServer((request, response) => {
    msg = `<h1 style='color:red;'>ELENA</h1> URI = ` + request.url + "<br>process.env.PORT = " + process.env.PORT;
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(msg);
    response.end();
});
//const server = http.createServer(function (req, res) {
//  fs.readFile('demofile1.html', function(err, data) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.write(data);
//    return res.end();
 // });

server.listen(port);

// console.log("Server running at http://localhost:%d", port);
