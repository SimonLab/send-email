'use strict'

require('env2')('.env');
const Server = require('./server');
const Hoek = require('hoek');
var s = 4;
Server.init(process.env.PORT, function (err, server) {
  Hoek.assert(!err, err);
  console.log('The server is running on: ', server.info.uri);
});
