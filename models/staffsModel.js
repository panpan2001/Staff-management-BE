const mongoose= require('mongoose')
const Joi= require('joi')

const staffSchema= mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    doB: {
        type: Date,
        required: true
    },
    salaryScale: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    departmentId: {
        type: Number,
        ref:"Department",
        required: true
    },
    annualLeave: {
        type: Number,
        required: true
    },
    overTime: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: false
    }
},{
    _id: false
})

function validateStaff(staff){
    const schema= Joi.object({
        _id: Joi.number().min(0).required(),
        name:Joi.string().required(),
        doB: Joi.date().required(),
        salaryScale: Joi.number().min(0).max(50).required(),
        startDate: Joi.date().required(),
        departmentId: Joi.number().required(),
        annualLeave: Joi.number().min(0).max(50).required(),
        overTime: Joi.number().min(0).max(50).required(),
        image: Joi.string()
    })
    return schema.validate(staff)
}

const Staff = mongoose.model("Staff",staffSchema)

exports.Staff= Staff
exports.validate= validateStaff