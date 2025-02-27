const Team = require('../models/team');
const mongoose = require('mongoose');
const Course = require("../models/Result");

const MAX_PHOTO_SIZE = 5 * 1024 * 1024; // 5MB

exports.add_member = async (req, res) => {
    try {
        const { full_name,subject,experience,color } = req.body;


const photo = req.files.photo[0].filename;
        const newEvent = new Team({
            full_name,subject,experience,color,
            photo, // Convert Base64 to Buffer

        });

        await newEvent.save();

        res.status(201).json({ message: 'Member added successfully.', event: newEvent });
    } catch (error) {
        res.status(500).json({ message: 'Error adding event.', error: error.message });
    }
};

exports.get_members = async (req, res) => {
    try {

        const events = await Team.find();

        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events.', error: error.message });
    }
};

exports.edit_members = async (req, res) => {
    try {
        const {full_name,subject,experience,color,_id:id} = req.body;
        const dt = await Team.findById(id)
        dt.full_name=full_name||dt.full_name;
        dt.subject=subject||dt.subject;
        dt.experience=experience||dt.experience;
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

exports.delete_members = async (req, res) => {
    try {
        const {_id:id} = req.body;
        const dt = await Team.findByIdAndDelete(id)

        return res.status(200).send({"message":"DELETED"});
    } catch (err){
        console.log(err)
        return res.status(500).send({error: err});
    }
}