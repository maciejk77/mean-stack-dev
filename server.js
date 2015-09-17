var http = require('http');
var connect = require('connect');
var app = connect();
app.listen(3000);

// http.createServer(function(req, res) {
  
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });
//   res.write('Hello World')
//   res.end();
// }).listen(3000);

console.log('Server up and running at http://localhost:3000');