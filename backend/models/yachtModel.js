const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Model subdocument schema
const ModelSchema = new Schema({
  
  // Add other model details as needed
});

// Define the Rental Record subdocument schema
const RentalRecordSchema = new Schema({
  renterName: String,
  rentalDate: Date,
  returnDate: Date,
  place: String,
  price: Number,
  // Add other rental details as needed
});

// Define the Yacht schema with references to the Model and an array of Rental Records
const YachtSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase:true,
    index: true
  },
  make: String,
  year: Number,
  description: String,
  lastMaintenanceDate: Date,
  nextMaintenanceDate: Date,
  rentalRecords: [RentalRecordSchema],
});

const Yacht = mongoose.model('Yacht', YachtSchema);

module.exports = Yacht;