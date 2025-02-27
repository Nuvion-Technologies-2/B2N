const Service = require('../models/slider');

exports.add_service = async (req, res) => {
    try {

        const { title,description,color,cta_text } = req.body;
        const photo=req.files.photo[0].filename;// Assuming photo is sent as a file (multipart/form-data)

        const newClient = new Service({
    title,description,color,cta_text,image:photo
});

        await newClient.save();

        res.status(201).json({ message: 'Slider added successfully.', client: newClient });
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
