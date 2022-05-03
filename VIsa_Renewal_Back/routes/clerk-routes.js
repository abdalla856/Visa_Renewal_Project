import express from 'express'

// const {check} = require('express-validator')

const clerkRout = express.Router()
import {login} from '../controllers/clerk-controller.js'

// clerkRout.get('/' , getUsers)


clerkRout.post('/clogin'  , login)

export default clerkRout