const express = require('express');
const router = express.Router();

const farmyard =require('../controllers/farmyard.controller');

router.post('/saveone', farmyard.create);
router.get('/getone/:id', farmyard.getonebyId);
router.delete('/delete/:id', farmyard.deleteById);
router.get('/getfarmyardchickens/:id',farmyard.getFarmyardChickens);

module.exports = router;