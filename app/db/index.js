const mongoose = require('mongoose');
const api_key = require('../config/config');

const MONGODB_URI = api_key.mongo;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
