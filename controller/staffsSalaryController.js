let { Staff} = require('../models/staffsModel')

exports.getstaffsSalaries = async (req, res) => {
    let staffs = await Staff.find()
    res.send(staffs)
}

// exports.getstaffsSalariesById = async (req, res) => {
//     let staff = await Staff.findById(req.params.id)
//     if (!staff) res.status(404).send("The staff doesn't exist")
//     res.send(staff)

// }
