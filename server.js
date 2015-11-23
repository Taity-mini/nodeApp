/**
 * Created by 1504693 on 23/11/2015.
 */
/**
 *Node.js first server script
 */
/**
 *Node.js script 1

var http = require('http')
var port = process.env.PORT || 1337;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
}).listen(port);
 */
var http = require('http')
var port = process.env.PORT || 1337;

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE 'html'>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello World Page</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("<h1>");
    response.write("Hello World!");
    response.write("</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end();
});
server.listen(port);
console.log("Server is listening");

