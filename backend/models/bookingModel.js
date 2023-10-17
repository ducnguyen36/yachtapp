const mongoose = require('mongoose');



// Define a schema for the booking model
const bookingSchema = new mongoose.Schema({
  yacht: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Yacht', // Reference to the Yacht model
    required: true,
  },
  yachtName: String,
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', // Reference to the User model
    required: true,
  },
  customerName: String,
  customerEmail: String,
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  }
  // You can add more fields as needed, such as payment details, status, etc.
});

// Create a model for the booking
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;