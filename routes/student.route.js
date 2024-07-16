const express = require('express');
const router = express.Router();
const controller = require('../controllers/student.controller')


router.get("/get",controller.getAllStudent);
router.post("/create",controller.createStudent);
router.delete("/delete/:studentId",controller.deleteStudent);
router.put("/delete/:studentId",controller.updateStudent);



module.exports = router;