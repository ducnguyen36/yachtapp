const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false
    });
    console.log('Connected to database!');
  } catch (error) {
    console.error('Error connecting to database:', error.message);
  }
};

module.exports = connectToDb;
