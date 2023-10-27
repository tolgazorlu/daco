import { Router } from "express"

const {Register, getUsers} = require('../controllers/authController')
const router: Router = require('express').Router()

router.post('/register', Register)
router.get('/all', getUsers)

module.exports = router