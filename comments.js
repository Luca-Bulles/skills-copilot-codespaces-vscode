// Create web server
// Create a web server that listens to requests on port 3000.
// The server should respond with the following:
// For requests to /, it should send "Hello, World!" in the response body.
// For requests to /comments, it should send an array of comments (strings) as JSON in the response body.
// The array of comments should have at least 3 comments.
// For any other request, it should send "Not Found" in the response body with a 404 status code.

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const comments = [
  'Comment 1',
  'Comment 2',
  'Comment 3'
];

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else if (pathname === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});