var http = require("http"),
    stream  = require("dronestream");

var server = http.createServer(function(req, res) {
  require("fs").createReadStream(__dirname + "/index.html").pipe(res);
});

stream.listen(server);
server.listen(3000);
