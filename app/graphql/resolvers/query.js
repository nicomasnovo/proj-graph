const models = require('../../models');

const hello = () => 'Hello world!';

const movies = async () => {
  return await models.Movie.find();
};

const movie = async (parent, args) => {
  return await models.Movie.findById(args.id);
};

module.exports = {
  hello,
  movies,
  movie,
};
