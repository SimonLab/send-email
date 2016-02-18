exports.register = function (server, options, next) {

  server.route([
                  {
                    method: 'GET',
                    path: '/login',
                    config: {
                      description: 'return the login page',
                      // auth: {
                      //   mode: 'try',
                      //   strategy: 'jwt'
                      // },
                      handler: function (request, reply) {
                        //get the url page
                        reply.view('login');
                      }
                    }
                  }
                ]);

  return next();
}

exports.register.attributes = {
  name: 'Login'
};
