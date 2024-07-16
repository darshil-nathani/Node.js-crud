const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name : String,
    age : Number
})

module.export = mongoose.model("student ", studentSchema);