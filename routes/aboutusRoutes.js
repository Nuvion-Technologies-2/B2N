const express = require('express');
const { fetch_about_us,add_about_us,edit_services,edit_about_us, add_service, get_all_services, delete_service} = require('../controllers/aboutusController');

const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "services/");
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
router.post('/get-all-about-us', fetch_about_us);
router.post('/get-all-services', get_all_services);
// router.post('/add-about-us', add_about_us);
router.post('/add-service',upload.fields([
        { name: "photo", maxCount: 1 },
    ]), add_service);
router.post('/edit-about-us', edit_about_us);
router.post('/edit-service',upload.fields([
        { name: "photo", maxCount: 1 },
    ]), edit_services);
router.post('/delete-service', delete_service);
module.exports = router;
