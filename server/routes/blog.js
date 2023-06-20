const express = require('express')
const router = express.Router()
const {create} = require('../controllers/JS/blogController')


router.post('/create', create)

module.exports = router