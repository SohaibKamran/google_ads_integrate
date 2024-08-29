const express = require('express')
const adController = require('../controllers/adController')

const router = express.Router()

router.post('/create-audience', adController.createAudience)
router.post('/create-image-ad', adController.createImageAd)
router.post('/other-action', adController.otherAction)

module.exports = router
