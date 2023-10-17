const Customer = require('../models/customerModel');

exports.fetchCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.fetchCustomer = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.json(customer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.updateCustomer = async (req, res) => {
    const { firstName, lastName, email, membership, expiredMembershipDate} = req.body;
    
    
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(
            req.params.id,
            {
                firstName,
                lastName,
                email,
                membership,
                expiredMembershipDate
            },
            { new: true }
        );
        res.json({message: 'Customer updated', updatedCustomer});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.json({message: 'Yacht deleted'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.createCustomer = async (req, res) => {
    const { firstName, lastName, email } = req.body;


    //create customer with it
    try{
        const newCustomer = await Customer.create({
            firstName,
            lastName,
            email
        });
        res.json({message: 'Customer added', newCustomer});
    } catch(error){
        res.status(500).json({message: error.message});
    }
}
