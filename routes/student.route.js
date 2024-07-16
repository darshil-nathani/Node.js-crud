const express = require('express');
const router = express.Router();
const controller = require('../controllers/student.controller')


router.get("/get",controller.getAllStudent);
router.post("/create",controller.createStudent);




module.exports = router;