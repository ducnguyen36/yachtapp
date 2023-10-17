const Yacht = require('../models/yachtModel');

exports.fetchYachts = async (req, res) => {
    try {
        const yachts = await Yacht.find();
        res.json(yachts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.fetchYacht = async (req, res) => {
    try {
        const yacht = await Yacht.findById(req.params.id);
        res.json(yacht);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.updateYacht = async (req, res) => {
    const {name, make, year, lastMaintenanceDate, nextMaintenanceDate} = req.body;
    
    
    try {
        const updatedYacht = await Yacht.findByIdAndUpdate(
            req.params.id,
            {
                name,
                make,
                year,
                lastMaintenanceDate,
                nextMaintenanceDate
            },
            { new: true }
        );
        res.json({message: 'Yacht updated', updatedYacht});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.deleteYacht = async (req, res) => {
    try {
        await Yacht.findByIdAndDelete(req.params.id);
        res.json({message: 'Yacht deleted'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.createYacht = async (req, res) => {
    const {name, make, year, lastMaintenanceDate, nextMaintenanceDate} = req.body;

    //create yatch with it
    try{
        const newYacht = await Yacht.create({
            name,
            make,
            year,
            lastMaintenanceDate,
            nextMaintenanceDate
        });
        res.json({message: 'Yatch created', newYacht});
    } catch(error){
        res.status(500).json({message: error.message});
    }
}
