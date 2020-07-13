# Swagger harvester-api

## Overview
Harvester App API for Mobile app to manage harvest quotas, reports and track crop harvest progeress. 
This Node app demonstrates use of 12 factor app methodology and Swagger for API design and documentation. The fetures of this example include a web template with REST API, PostgresDB access methods using SQL, promise and ORM methods. This app also demonstartes use of pipelines, github for deployment, and Express and Authentication with Social logins.

For quick startup use this Heroku button below.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/iandrosov/harvester-api)

This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate a server stub.  This is an example of building a node.js server.

This example uses the [expressjs](http://expressjs.com/) framework.

### Running the server
To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:8080/docs
```

# Heroku Deployment

This process uses automatic git deploy to Heroku to push builds on dev, stage or prod.
Typical setup can be PROD to master branch, STAGE linked to stage branch and DEV linked to dev branch. 

However, this can lead to deployed targets being out of sync especially when using Heroku Pipelines. We found that simple and more stable way to use auto deploy with pipelines is to link one of your envionments to github for deploy. Then once app is tested use pipeline promotion to push the builds upstrem to stage and prod.

In this example we link DEV with master branch.
Then following git flow to push builds to Heroku. Creating pul requests for features is good method to test with review apps. New pull request can crreate a new review app for validation. After review app is confirmed this pull request can be merged to master and this will push the buld to dev. Then we can promote this buuild via pipeline to stage for QA and then prod environments.

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.


