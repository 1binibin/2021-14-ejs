const express = require('express')
const router = express.Router()
const createError = require('http-errors')

router.use((req, res, next) => {
    next( createError(404, '파일을 찾을 수 없습니다') )
})

router.use((error, req, res, next) => {
    console.log(error.status)
    console.log(error.message)
})

module.exports = router