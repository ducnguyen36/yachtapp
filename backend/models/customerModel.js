const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Customer schema

// Define the Membership schema

const CustomerSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase:true,
    index: true
  },
  membership: {
    type: String,
    enum: ['Silver', 'Gold', 'Platinum', 'Diamond'],
    default: 'Silver'
  },
  expiredMembershipDate: {
    type: Date,
    default: Date.now() + 30 * 24 * 60 * 60 * 1000
  }
  

});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;