const Booking = require('../models/bookingModel');
const Customer = require('../models/customerModel');
const Yacht = require('../models/yachtModel');

exports.fetchBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.fetchBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        res.json(booking);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.updateBooking = async (req, res) => {
    const { yachtName, customerEmail, startDate, endDate } = req.body;

    //find customer by email
    const customer = await Customer.findOne({email: customerEmail});
    //find yacht by name
    const yacht = await Yacht.findOne({name: yachtName});

    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            {
                yacht: yacht._id,
                yachtName,
                customer: customer._id,
                customerName: `${customer.firstName} ${customer.lastName}`,
                customerEmail,
                startDate,
                endDate
            },
            { new: true }
        );
        res.json({message: 'Booking updated', updatedBooking});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.deleteBooking = async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({message: 'Booking deleted'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.createBooking = async (req, res) => {
    const { yachtName, customerEmail, startDate, endDate } = req.body;

    //find customer by email
    const customer = await Customer.findOne({email: customerEmail});
    //find yacht by name
    const yacht = await Yacht.findOne({name: yachtName});

    

    //create booking with it
    try{
        const newBooking = await Booking.create({
            yacht: yacht._id,
            yachtName,
            customer: customer._id,
            customerName: `${customer.firstName} ${customer.lastName}`,
            customerEmail,
            startDate,
            endDate
        });

        res.json({message: 'Booking created', newBooking});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}