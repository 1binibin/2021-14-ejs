const express = require('express')
const router = express.Router()

const { error } = require('../../modules/util')

router.get('/login', (req, res, next) => {
	next(error(500, '알수없는 오류 관리자에게 문의하세요.'))
})

router.get('/logout', (req, res, next) => {
	res.send('로그아웃')
})

router.get('/join', (req, res, next) => {
	res.send('회원가입')
})

module.exports = router