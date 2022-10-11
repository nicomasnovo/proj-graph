const models = require('../../models');

const addMovie = async (parent, args, { models }) => {
  const { name, time, rating } = args;
  return await models.Movie.create({
    name,
    time,
    rating,
  });
};
const updateMovie = async (parent, args, { models }) => {
  const { id, name, time, rating } = args;
  return await models.Movie.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        name,
        time,
        rating,
      },
    },
    {
      new: true,
    }
  );
};

const deleteMovie = async (parent, { id }, { models }) => {
  try {
    await models.Movie.findOneAndRemove({ _id: id });
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = {
  addMovie,
  updateMovie,
  deleteMovie,
};
