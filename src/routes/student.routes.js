const express = require('express');
const router = express.Router();

router.get("/",(req, res)=>{
    res.send("first route");
})

module.exports = router;