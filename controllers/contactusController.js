const ContactUs=require("../models/ContactUs");
const User = require('../models/user');
const Events = require("../models/ContactUs");
const mongoose = require("mongoose");

exports.getContactUs = async (req, res) => {
    const{user_id}=req.body;
    const userExists = await User.findById(user_id);
        if (!userExists) {
            return res.status(400).json({ message: 'Unauthorized User' });
        }
    const Queries=await ContactUs.find();
        res.status(200).json({ queries: Queries });

}

exports.change_query_status = async (req, res) => {
    try {
        const { event_id, user_id } = req.body;

        const userExists = await User.findById(user_id);
        if (!userExists) {
            return res.status(400).json({ message: 'Unauthorized User' });
        }

        const event = await Events.findById(event_id);
        if (!event) {
            return res.status(404).json({ message: 'Query not found' });
        }

        event.active = false;
        event.resolvedOn=Date.now();
        await event.save();

        res.json({ message: `Query Resolved` });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update status.', error: error.message });
    }
};const { sendWhatsAppMessage } = require('../utils/wpmessage');

exports.add_query = async (req, res) => {
  const { name, mobileno, email, standard, education, board, description } = req.body;

    const msg = `Name: ${name}
Mobile No: ${mobileno}
Email: ${email}
Standard: ${standard}
Education: ${education}
Board: ${board}
Description: ${description}
Date & Time : ${new Date().toLocaleString()}`;

  // Call sendWhatsAppMessage but don't await it if you don't need to wait for it to finish
  sendWhatsAppMessage(msg);

  res.status(201).json({ message: 'Query added successfully.' });
};
