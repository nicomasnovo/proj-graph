const models = require('../../../models');

const movies = async () => {
  return await models.Movie.find();
};

const movie = async (parent, args) => {
  return await models.Movie.findById(args.id);
};

module.exports = {
  movies,
  movie,
};
