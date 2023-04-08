const express= require('express')
const router = express.Router()
const staffsSalaryController= require('../controller/staffsSalaryController')

router.get('/',staffsSalaryController.getstaffsSalaries)

// router.get('/:id',staffsSalaryController.getstaffsSalariesById)

module.exports= router
