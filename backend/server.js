//Load env variables
if(process.env.NODE_ENV !== 'production')
    require('dotenv').config();

//Import dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./config/connectToDb');
const yachtsController = require('./controllers/yachtsController'); 
const usersController = require('./controllers/usersController');
const customersController = require('./controllers/customersController');
const bookingsController = require('./controllers/bookingsController');
const requireAuth = require('./middleware/requireAuth');

//create express app
const app = express();

//configure express app
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}));

//Connect to database
connectToDb();

//Routing
//root
app.get('/', (req, res) => {
    res.json({message: 'Welcome to the server'})
});

//users
app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.get('/logout', usersController.logout);
app.get('/check-auth', requireAuth, usersController.checkAuth);

//customers
app.post('/customers', customersController.createCustomer);
app.get("/customers", customersController.fetchCustomers);
app.get("/customers/:id", customersController.fetchCustomer);
app.put("/customers/:id", customersController.updateCustomer);
app.delete("/customers/:id", customersController.deleteCustomer);

//yachts
app.post('/yachts', yachtsController.createYacht);
app.get("/yachts", yachtsController.fetchYachts);
app.get('/yachts/:id', yachtsController.fetchYacht);
app.put('/yachts/:id', yachtsController.updateYacht);
app.delete('/yachts/:id', yachtsController.deleteYacht);

//bookings
app.post('/bookings', bookingsController.createBooking);
app.get("/bookings", bookingsController.fetchBookings);
app.get('/bookings/:id', bookingsController.fetchBooking);
app.put('/bookings/:id', bookingsController.updateBooking);
app.delete('/bookings/:id', bookingsController.deleteBooking);

//Start our server
app.listen(process.env.PORT);

//node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"