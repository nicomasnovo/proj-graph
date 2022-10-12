const { gql } = require('apollo-server-express');
//DO REFACTOR
module.exports = gql`
  type Movie {
    id: ID
    name: String!
    time: String!
    rating: String!
  }
  type Query {
    hello: String
    movies: [Movie!]!
    movie(id: ID!): Movie!
  }
  type Mutation {
    addMovie(name: String!, time: String!, rating: String!): Movie!
    updateMovie(id: ID!, name: String, time: String, rating: String): Movie!
    deleteMovie(id: ID!): Boolean!
  }
`;
