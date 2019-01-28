const express = require('express')
const router = express.Router()
const creaturesController = require('../controllers/creaturesController')


router.get('/api/creatures', creaturesController.index)
router.post('/api/creatures/', creaturesController.create)
router.get('/api/creatures/:creaturesId', creaturesController.show)
router.patch('/api/creatures/:creaturesId', creaturesController.update)
router.delete('/api/creatures/:creaturesId', creaturesController.delete)





module.exports = router