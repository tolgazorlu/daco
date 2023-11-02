import { Router } from "express"
import { isAuth } from "../utils/isAuth"
import { isAdmin } from "../utils/isAdmin"

const {Register, getUsers, Login} = require('../controllers/authController')
const router: Router = require('express').Router()

router.post('/register', Register)
router.post('/login', Login)
router.get('/all', getUsers, isAuth, isAdmin)

module.exports = router