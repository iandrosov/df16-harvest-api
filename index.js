'use strict';

// https://harvester-api-dev.herokuapp.com/api
// Setup node app for clustering with Throng - https://github.com/hunterloftis/throng
var throng = require('throng');

var WORKERS = process.env.WEB_CONCURRENCY || 1;
var serverPort = process.env.PORT || 8080;

throng(start, {
  workers: WORKERS,
  lifetime: Infinity
});

function start() {

  var app = require('connect')();
  var http = require('http');
  var swaggerTools = require('swagger-tools');
  var jsyaml = require('js-yaml');
  var fs = require('fs');


  // swaggerRouter configuration
  var options = {
    swaggerUi: '/swagger.json',
    controllers: './controllers',
    useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
  };

  // The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
  var spec = fs.readFileSync('./api/swagger.yaml', 'utf8');
  var swaggerDoc = jsyaml.safeLoad(spec);

  // Initialize the Swagger middleware
  swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // Start the server
    http.createServer(app).listen(serverPort, function () {
      console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
      console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
  });

}
