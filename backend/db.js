
const mongoose = require('mongoose');

const connectTomongo = () => {
  return mongoose.connect("mongodb://localhost:27017/inotebook")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
};

module.exports = connectTomongo;
