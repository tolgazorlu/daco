import { Router } from "express"
import { isAuth } from "../utils/isAuth"
import { isAdmin } from "../utils/isAdmin"
const { UserVerification } = require('../middlewares/authMiddleware')
const {Register, getUsers, Login, Update} = require('../controllers/authController')
const router: Router = require('express').Router()

router.post('/', UserVerification)
router.get('/all', isAuth, isAdmin, getUsers)
router.post('/register', Register)
router.post('/login', Login)
router.put('/update', isAuth, Update)

module.exports = router