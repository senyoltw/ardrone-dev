var arDrone = require('ar-drone');
var http    = require('http');
var lastPng;
var lastVideo;

var client  = arDrone.createClient();
var pngStream = client.getPngStream();

pngStream
  .on('data', function(pngBuffer) {
    lastPng = pngBuffer;
  });

var server = http.createServer(function(req, res) {
  if (!lastPng) {
    res.writeHead(503);
    res.end('Did not receive any png data yet.');
    return;
  }

  res.writeHead(200, {'Content-Type': 'image/png'});
  res.end(lastPng);
});

server.listen(3000, function() {
  console.log('Serving latest png on port 3000 ...');
});