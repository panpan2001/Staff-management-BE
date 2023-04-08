const express= require('express')
const router = express.Router()
const staffController= require('../controller/staffsController')

router.get('/',staffController.getStaffs)

router.get('/:id',staffController.getStaffsById)

router.post('/',staffController.addStaffs)

router.put('/:id',staffController.updateStaffs)

router.delete("/:id",staffController.deleteStaffs)

module.exports= router