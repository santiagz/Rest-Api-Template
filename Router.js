const Router = require('express')

const router = new Router()
const controller = require('./Controller')

//POST

router.post('/create-post',  controller.Create)

router.post('/update-post',  controller.Update)

router.post('/obtain-post',  controller.Obtain_Post)

router.post('/test-post', controller.Test_Post)

//GET

router.get('/obtain-get/:param1/:param2', controller.Obtain_Get)

router.get('/test-get', controller.Test_Get)

module.exports = router
