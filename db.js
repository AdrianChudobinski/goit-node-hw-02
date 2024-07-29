const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://adrianchudobinski14:74FdsPjndKNWZgMr@cluster0.qlsvpjg.mongodb.net/';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connection successful'))
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
  });
