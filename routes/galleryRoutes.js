const express = require('express');
const { add_service, delete_photo, get_services} = require('../controllers/galleryController');

const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "gallery/");
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
router.post('/add-photo',upload.fields([
        { name: "photo", maxCount: 1 },
    ]), add_service);
router.post('/delete-photo', delete_photo);
router.post('/get-photos', get_services);


module.exports = router;
