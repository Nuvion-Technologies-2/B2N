const Detail = require('../models/Details');

const fetch_about_us = async (req, res) => {
    try{
        const aboutus = await Detail.find({constraint:"about-us"});
        return res.status(200).json(aboutus);
    } catch (err){
        console.log(err);
        return res.status(500).send({error: err});
    }
}

const get_all_services = async (req, res) => {
    try{
        const aboutus = await Detail.find({constraint:"services"});
        return res.status(200).json(aboutus);
    } catch (err){
        console.log(err);
        return res.status(500).send({error: err});
    }
}
const add_about_us = async (req, res) => {
    try {
        const {title,description,color,icon,identify,constraint} = req.body;

        const dt = new Detail ({
            title,description,color,icon,identify,constraint
        })
        await dt.save()
        return res.status(200).json(dt);
    } catch (err){
        console.log(err);
        return res.status(500).send({error: err});
    }
}

const add_service = async (req, res) => {
    try {
        const {title,description,color,icon,identify,constraint} = req.body;
        const photoFileName = req.files.photo[0].filename||"";
        const dt = new Detail ({
            title,description,color,icon,identify,image:photoFileName || '',constraint:"services"
        })
        await dt.save()
        return res.status(200).json(dt);
    } catch (err){
        console.log(err);
        return res.status(500).send({error: err});
    }
}

const edit_about_us = async (req, res) => {
    try {
        const {title,description,color,icon,_id:id} = req.body.itemToUpdate;
        console.log(req.body.itemToUpdate)
        console.log(id)
        const dt = await Detail.findById(id);
        console.log(dt)
        dt.title=title||dt.title;
        dt.description=description||dt.description;
        dt.color=color||dt.color;
        dt.icon=icon||dt.icon;
        dt.save()
        return res.status(200).json(dt)
    } catch (err){
        console.log(err)
        return res.status(500).send({error: err});
    }
}

const edit_services = async (req, res) => {
    try {
        console.log(req.body)
        const {title,description,color,icon,_id:id} = req.body;
        const dt = await Detail.findById(id)
        dt.title=title||dt.title;
        dt.description=description||dt.description;
        if (req.files && req.files.photo && req.files.photo.length > 0) {
            console.log(req.files)
            const photoFileName = req.files.photo[0].filename||"";
            dt.image=photoFileName||dt.image;
        }
        dt.color=color||dt.color;
        dt.icon=icon||dt.icon;

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

        const dt = await Detail.findByIdAndDelete(id)

        return res.status(200).send({"MESSAGE":"DELETED"})
    } catch (err){
        console.log(err)
        return res.status(500).send({error: err});
    }
}


module.exports = {fetch_about_us,add_about_us,edit_about_us,edit_services,add_service,get_all_services,delete_service};