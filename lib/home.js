exports.register = function (server, options, next) {

  server.route([
                  {
                    method: 'GET',
                    path: '/',
                    config: {
                      description: 'return the home page',
                      // auth: {
                      //   mode: 'try',
                      //   strategy: 'jwt'
                      // },
                      handler: function (request, reply) {
                        reply.view('home');
                      }
                    }
                  }
                ]);

  return next();
}

exports.register.attributes = {
  name: 'Home'
};
