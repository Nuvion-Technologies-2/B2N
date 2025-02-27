const express = require('express');
const { add_member,get_members,edit_members, delete_members} = require('../controllers/teamController');
const router = express.Router();


const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "teams/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const fs = require('fs');
const path = require("path");

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        // Ensure only expected file types are allowed (e.g., images)
        const allowedTypes = /jpeg|jpg|png/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        if (extname) {
            cb(null, true);
        } else {
            cb(new Error("Only images are allowed"));
        }
    },
});
router.post('/add-member',upload.fields([
        { name: "photo", maxCount: 1 },
    ]),add_member);
router.post('/get-all-member',get_members);
router.post('/edit-member',upload.fields([
        { name: "photo", maxCount: 1 },
    ]),edit_members);
router.post('/delete-member',delete_members);
module.exports = router;
