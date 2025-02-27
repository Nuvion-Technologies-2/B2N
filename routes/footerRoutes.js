const express = require('express');
const { fetch_footer,add_footer,edit_footer} = require('../controllers/footerControllers');

const router = express.Router();

// router.post('/add-footer', add_footer);
router.post('/edit-footer', edit_footer);
router.post('/get-footer', fetch_footer);


module.exports = router;
