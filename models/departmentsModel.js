const mongoose= require('mongoose')
const Joi= require('joi')

const departmentSchema = mongoose.Schema({
    _id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    numberOfStaffs: {
      type: Number,
      required: true
    }
  }, {
    _id: false
  })

function validateDepartment(department){
    const schema= Joi.object({
        _id: Joi.number().required(),
        name: Joi.string().min(1).max(50).required(),
        numberOfStaffs: Joi.number().required(),

    })
    return schema.validate(department)
}

const Department= mongoose.model("Department",departmentSchema)

exports.Department=Department
exports.validate= validateDepartment
