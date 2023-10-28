import { Router } from "express"

const {Register, getUsers, Login} = require('../controllers/authController')
const router: Router = require('express').Router()

router.post('/register', Register)
router.post('/login', Login)
router.get('/all', getUsers)

module.exports = router