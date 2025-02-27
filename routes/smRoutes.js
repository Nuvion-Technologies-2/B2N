const express = require('express');
const { add_service, delete_photo, get_services} = require('../controllers/smController');

const router = express.Router();

router.post('/add-sm', add_service);
router.post('/delete-sm', delete_photo);
router.post('/get-sm', get_services);


module.exports = router;
