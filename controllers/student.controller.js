const Student = require('../model/student.model');
const {createStudentSchema ,updateStudentSchema } = require('../validations/student.vaidations');

const createStudent = async(req, res) =>{
    try{
        const student = req.body;
        // const validationError = await createStudentSchema.validateAsync(student);
        //     if(validationError){
        //         return res.send(validationError);
        //     }

        const newStudent = new Student(student);
        await newStudent.save();
        res.status(200).send(newStudent);
    }
     catch(e){
        console.log("not insert student");
        res.status(400).json({message : e.message});
    }
}

const getAllStudent = async(req, res) =>{
    try{
        const students = await Student.find({});
        res.status(201).json(students)
    }
    catch(err){
        console.log("not insert student");
        res.status(400).send(err);
    }
}


module.exports = {createStudent , getAllStudent , deleteStudent , updateStudent};