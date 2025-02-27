const Detail = require('../models/footer');

const fetch_footer = async (req, res) => {
    try{
        const aboutus = await Detail.find();
        return res.status(200).json(aboutus);
    } catch (err){
        console.log(err);
        return res.status(500).send({error: err});
    }
}

const add_footer = async (req, res) => {
    try {
        const {about_description,address,email,phone,facebook,instagram,youtube} = req.body;

        const dt = new Detail ({
            about_description,address,email,phone,facebook,instagram,youtube
        })
        await dt.save()
        return res.status(200).json(dt);
    } catch (err){
        console.log(err);
        return res.status(500).send({error: err});
    }
}

const edit_footer = async (req, res) => {
    try {
        const {about_description,address,email,phone,facebook,instagram,youtube,_id} = req.body;

        const dt = await Detail.findById(_id);

        dt.about_description=about_description||dt.about_description;
        dt.address=address||dt.address;
        dt.email=email||dt.email;
        dt.phone=phone||dt.phone;
        dt.facebook=facebook||dt.facebook;
        dt.youtube=youtube||dt.youtube;
        dt.instagram=instagram||dt.instagram;
        dt.save()
        return res.status(200).json(dt)
    } catch (err){
        console.log(err)
        return res.status(500).send({error: err});
    }
}


module.exports = {fetch_footer,add_footer,edit_footer};