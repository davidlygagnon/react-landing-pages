var express = require('express');
var path = require('path');
var webpack = require('webpack');
var env = require('node-env-file');

var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, '/../../public');

var https = require('https');

// load environment file
if (isDevelopment) {
	env(__dirname + '../../../.env', {raise: false});
}

app.use(express.static(static_path));
app.get('/', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
});
app.get('*', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
});
app.listen(process.env.PORT || 5000, function (err) {
    if (err) { console.log(err) };
    console.log('Listening at localhost:5000');
  });

if (isDevelopment) {
  var config = require('../../webpack.config');
  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
	proxy: config.proxy
  }).listen(3000, 'localhost', function (err, result) {
    if (err) { console.log(err) }
    console.log('Listening at localhost:3000');
  });
}
