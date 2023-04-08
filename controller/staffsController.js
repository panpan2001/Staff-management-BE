let { Staff, validate } = require('../models/staffsModel')
let { Department } = require('../models/departmentsModel')

exports.getStaffs = async (req, res) => {
    try {
        let staffs = await Staff.find()
        res.send(staffs)        
    } catch (error) {
        console.log("Get staffs Failed: ", error)
    }

}

exports.getStaffsById = async (req, res) => {
    try {
        let staff = await Staff.findById(req.params.id)
        if (!staff) res.status(404).send("The staff doesn't exist")
        res.send(staff)
    } catch (error) {
        console.log("Get staffs Failed: ", error)
    }

}

exports.addStaffs = async (req, res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.message)
    const staff = new Staff({
        _id: req.body._id,
        name: req.body.name,
        doB: req.body.doB,
        salaryScale: req.body.salaryScale,
        startDate: req.body.startDate,
        departmentId: req.body.departmentId,
        annualLeave: req.body.annualLeave,
        overTime: req.body.overTime,
        image: req.body.image
    })
    await staff.save()
    res.send(staff)

}

exports.updateStaffs = async (req, res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.message)
    const staff = await Staff.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        doB: req.body.doB,
        salaryScale: req.body.salaryScale,
        startDate: req.body.startDate,
        departmentId: req.body.departmentId,
        annualLeave: req.body.annualLeave,
        overTime: req.body.overTime,
        image:req.body.image
    }, {
        new: true
    })
    if (!staff) res.status(404).send("The staff doesn't exist")
    res.send(staff)

}

exports.deleteStaffs = async (req, res) => {
    const staff = await Staff.findByIdAndRemove(req.params.id)
    if (!staff) res.status(404).send("The staff doesn't exist")
    res.send(staff)

}
