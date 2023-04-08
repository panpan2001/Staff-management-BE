let {Department, validate}= require('../models/departmentsModel')

exports.getDepartments = async (req, res) => {
    const  departments = await Department.find()
    res.send(departments)
}

exports.getDepartmentsById = async(req,res)=>{
    let department= await Department.findById(req.params.id)
    if(!department) res.status(404).send("The department doesn't exist")
    res.send(department)

}

exports.addDepartments = async(req,res)=>{
    const {error}= validate(req.body)
    if(error) res.status(400).send(error.message)
    const department= new Department({
        _id: req.body._id,
        name: req.body.name,
        numberOfStaffs: req.body.numberOfStaffs
    })
    await department.save()
    res.send(department)

}

exports.updateDepartments = async(req,res)=>{
    const {error}= validate(req.body)
    if(error) res.status(400).send(error.message)
    const department= await Department.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        numberOfStaffs: req.body.numberOfStaffs
    },{
        new:true
    })
    if(!department) res.status(404).send("The department doesn't exist")
    res.send(department)

}

exports.deleteDepartments = async(req,res)=>{
    const department= await Department.findByIdAndRemove(req.params.id)
    if(!department) res.status(404).send("The department doesn't exist")
    res.send(department)
}