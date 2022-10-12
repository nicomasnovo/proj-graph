const Movies = require('./movies/query');

const hello = () => 'Hello world!';

module.exports = {
  hello,
  ...Movies,
};
