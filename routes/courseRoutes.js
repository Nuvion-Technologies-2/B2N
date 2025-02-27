const express = require('express');
const { edit_services, add_service, get_all_services, delete_service} = require('../controllers/coursesController');

const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "courses/");
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
router.post('/get-all-course', get_all_services);

router.post('/add-course',upload.fields([
        { name: "photo", maxCount: 1 },
    ]), add_service);
router.post('/edit-course',upload.fields([
        { name: "photo", maxCount: 1 },
    ]), edit_services);

router.post('/delete-course', delete_service);
module.exports = router;
