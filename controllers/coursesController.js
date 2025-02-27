const Course = require('../models/Course');
const Detail = require("../models/Details");

const get_all_services = async (req, res) => {
    try{
        const aboutus = await Course.find();
        return res.status(200).json(aboutus);
    } catch (err){
        console.log(err);
        return res.status(500).send({error: err});
    }
}

const add_service = async (req, res) => {
    try {
        const {title,description,color,duration,feature1,feature2,feature3} = req.body;
        const photoFileName = req.files.photo[0].filename||"";
        const dt = new Course ({
            title,description,color,duration,feature1,feature2,feature3,image:photoFileName || ''
        })
        await dt.save()
        return res.status(200).json(dt);
    } catch (err){
        console.log(err);
        return res.status(500).send({error: err});
    }
}

const edit_services = async (req, res) => {
    try {
        const {title,description,color,duration,feature1,feature2,feature3,_id:id} = req.body;
        const dt = await Course.findById(id)
        dt.title=title||dt.title;
        dt.description=description||dt.description;
        dt.color=color||dt.color;
        dt.duration=duration||dt.duration;
        dt.feature1=feature1||dt.feature1;
        dt.feature1=feature2||dt.feature1;
        dt.feature1=feature3||dt.feature1;

        if (req.files && req.files.photo && req.files.photo.length > 0) {
            const photoFileName = req.files.photo[0].filename||"";
            dt.image=photoFileName||dt.image;
        }
        dt.save()
        return res.status(200).json(dt)
    } catch (err){
        console.log(err)
        return res.status(500).send({error: err});
    }
}
const delete_service = async (req, res) => {
    try {
        const {_id:id} = req.body;

        const dt = await Course.findByIdAndDelete(id)

        return res.status(200).send({"MESSAGE":"DELETED"})
    } catch (err){
        console.log(err)
        return res.status(500).send({error: err});
    }
}

module.exports = {edit_services,delete_service,add_service,get_all_services};