const Course = require('../models/Result');

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
        const {name,subject,exam_name,rank,identify,marks_obt,total_marks,percentage,ach_1,ach_2,color} = req.body;
        const photoFileName = req.files.photo[0].filename||"";
        const dt = new Course ({
            name,subject,exam_name,rank,identify,marks_obt,total_marks,percentage,ach_1,ach_2,color,photo:photoFileName || ''
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
        const {name,subject,exam_name,rank,identify,marks_obt,total_marks,percentage,ach_1,ach_2,color,_id:id} = req.body;
        const dt = await Course.findById(id)
        dt.name=name||dt.name;
        dt.subject=subject||dt.subject;
        dt.exam_name=exam_name||dt.exam_name;
        dt.rank=rank||dt.rank;
        dt.identify=identify||dt.identify;
        dt.marks_obt=marks_obt||dt.marks_obt;
        dt.total_marks=total_marks||dt.total_marks;
        dt.percentage=percentage||dt.percentage;
        dt.ach_1=ach_1||dt.ach_1;
        dt.ach_2=ach_2||dt.ach_2;
        dt.color=color||dt.color;

        if (req.files && req.files.photo && req.files.photo.length > 0) {
            const photoFileName = req.files.photo[0].filename||"";
            dt.photo=photoFileName||dt.photo;
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