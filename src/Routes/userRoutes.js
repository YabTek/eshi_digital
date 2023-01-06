const express = require('express')
const router = express.Router()
const {login,register,getUser,getUsers,updateUser,deleteUser} = require('../Controllers/userConroller')


router.route('/login').post(login)
router.route('/register').post(register)

router.route('/').get(getUsers)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router