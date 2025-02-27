const Service = require('../models/socialmedia');

exports.add_service = async (req, res) => {
    try {

        const { link } = req.body;

        const newClient = new Service({
    link
});

        await newClient.save();

        res.status(201).json({ message: 'Client added successfully.', client: newClient });
    } catch (error) {
        res.status(500).json({ message: 'Error adding client.', error: error.message });
    }
};

exports.get_services=async (req, res) => {
    try {


        const clients = await Service.find();

        res.status(200).json({ clients });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching clients.', error: error.message });
    }
}

exports.delete_photo = async (req, res) => {
    try {
        const {_id }= req.body;
        const clients = await Service.findByIdAndDelete(_id);
        res.status(200).json({ clients });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching clients.', error: error.message });
    }
}
