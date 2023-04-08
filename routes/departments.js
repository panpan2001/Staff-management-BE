const express= require('express')
const router = express.Router()
const departmentController= require('../controller/departmentsController')

router.get('/',departmentController.getDepartments)

router.get('/:id',departmentController.getDepartmentsById)

router.post('/',departmentController.addDepartments)

router.put('/:id',departmentController.updateDepartments)

router.delete("/:id",departmentController.deleteDepartments)

module.exports= router