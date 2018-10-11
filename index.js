var http = require('http');
var json = {
  "applinks": {
    "apps": [],
    "details": [
      { 
        "appID": "P4LZFPM2NH.com.gemini.ios",
        "paths": [ "/mobile/*" ]
      }
    ]
  }
};
var port = process.env.PORT || 3000;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(json));
}).listen(port);