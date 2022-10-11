const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
//Project Internals
const typeDefs = require('./app/graphql/schema');
const resolvers = require('./app/graphql/resolvers');
const movieRouter = require('./app/api/routes/movie-router');
const db = require('./app/db');
const models = require('./app/models');

//Express App
const app = express();
//Cors & bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
//Api
app.use('/api', movieRouter);
//Health check
app.get('/health-check', (req, res) =>
  res.send('Calm down dude! We are fine!')
);
//Connection to DB
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//create Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { models };
  },
  introspection: true,
  playground: true,
});

//Set port
app.set('port', process.env.PORT || 4000);
//listen app
server.start().then((res) => {
  server.applyMiddleware({ app, path: '/graph' });
  app.listen(app.get('port'), () =>
    console.log('Server Running at http://localhost:' + app.get('port'))
  );
});
