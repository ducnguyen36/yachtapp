const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

async function requireAuth(req, res, next) {
    try {
        
        //Get the token from the cookie
        const token = req.cookies.token;
        //If no token, respond with error
        if(!token) return res.status(401).json({message: 'You must be logged in to view this page'});
        
        //Decode the token
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        
        //Find the user in the database
        const user = await User.findById(decode.id);

        //If no user found, respond with error
        if(!user) return res.status(401).json({message: 'You must be logged in to view this page'});

        //Attach the user to the request object
        req.user = user;

        //continue
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({message: 'You must be logged in to view this page'});
    }
}

module.exports = requireAuth;