const http2 = require('http2');
const server = http2.createServer();

server.on('stream', (stream, requestHeaders) => {
  stream.respond({ ':status': 200, 'content-type': 'text/plain' });
  stream.write('hello ');
  stream.end('world');
});

server.listen(8000);

const client = http2.connect('http://localhost:8000');
const req = client.request({ ':method': 'GET', ':path': '/' });
req.on('response', responseHeaders => {
  // do something with the headers
});
req.on('data', chunk => {
  // do something with the data
});
req.on('end', () => client.destroy());
