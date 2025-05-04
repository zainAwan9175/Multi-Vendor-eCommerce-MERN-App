// db/Database.js

const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect("mongodb://localhost:27017/Multivender")
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    });
};

module.exports = connectDatabase;
