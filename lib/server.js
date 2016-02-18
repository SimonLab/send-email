'use strict'

const Hapi = require('hapi');
const Home = require('./home');
const Handlebars = require('handlebars');
const Vision = require('vision');
const Login = require('./login');

exports.init = function(port, next) {

  const server = new Hapi.Server();
  server.connection({port: port});

  const plugins = [Vision, Home, Login];
  server.register(plugins, function(err){

    server.views({
      engines: {
        html: Handlebars
      },
      relativeTo: __dirname + '/../views/',
      path: '.',
      layout: 'default',
      layoutPath: 'layout',
      helpersPath: 'helpers',
      partialsPath: 'partials'
    });

    server.start(function(err) {

      return next(err, server);
    });
  });
}
