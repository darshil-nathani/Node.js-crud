const joi = require('joi');

const createStudentSchema = joi.object({
    name : joi.string().required(),
    age : joi.number().required(),
});

const updateStudentSchema = joi.object({
    name : joi.string().required(),
    age : joi.number().required(),
});

module.exports = {
    createStudentSchema,
    updateStudentSchema,
}
