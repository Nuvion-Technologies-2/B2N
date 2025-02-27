const express = require('express');
const { edit_services, add_service, get_all_services, delete_service} = require('../controllers/resultsController');

const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "results/");
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
router.post('/get-all-result', get_all_services);

router.post('/add-result',upload.fields([
        { name: "photo", maxCount: 1 },
    ]), add_service);
router.post('/edit-result',upload.fields([
        { name: "photo", maxCount: 1 },
    ]), edit_services);
router.post('/delete-result', delete_service);
module.exports = router;
