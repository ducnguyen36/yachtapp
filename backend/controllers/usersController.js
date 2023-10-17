const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {
    try {
        //get the email and password from the request body
        const {email, password, role} = req.body;
    
        //hash the password
        const hashedPassword = await bcrypt.hash(password, 12);
    
        //create user with it
        await User.create({
            email,
            password: hashedPassword,
            role
        });
    
        //respond
        res.json({message: 'User created'});
        
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
}

exports.login = async (req, res) => {
    try {
        //Get the email and password from the request body
        const {email, password} = req.body;

        //Find the user in the database
        const user = await User.findOne({email});
        //If no user found, respond with error
        if(!user) return res.status(401).json({message: 'User not found'});


        //Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(401).json({message: 'Invalid credentials'});

        //Create a token
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({id: user._id, exp}, process.env.JWT_SECRET);

        //Send the token in a cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
        });
        
        //respond
        res.status(200).json({message: 'User logged in', user: {email: user.email, role: user.role}});

    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
}

exports.checkAuth = async (req, res) => {
    try {
        res.status(200).json({message: 'User logged in', user: req.user});
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
}

exports.logout = async (req, res) => {
    try {
        //Clear the cookie
        res.clearCookie('token');

        //respond
        res.status(200).json({message: 'User logged out'});
    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
}