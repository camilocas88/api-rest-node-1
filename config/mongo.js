const mongoose = require('mongoose');

const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('***Connected to MongoDB***');
  });

  mongoose.connection.on('error', (err) => {
    console.log('***Error connecting to MongoDB***', err);
  });

}

module.exports = dbConnection
