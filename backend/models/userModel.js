const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase:true,
    index: true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Owner','Captain','Crew','Back Office'],
    default: 'Crew',
  },
});

module.exports = mongoose.model('User', userSchema);