const express=require('express')
const { register,login, getuser ,updateuser,getotp,verifyotp,resetpass, resetSession,verifyuser,pregister,pdata} = require('./function')
const Auth=require('./middleAuth')
const localvariable=require('./localvariable')
const router=express.Router()
const {registermail}=require('./nodemailer')




router.route('/login').post(verifyuser,login)
router.route('/register').post(register)
router.route('/authenticate').post(verifyuser,(req,res)=>res.status(200).send({msg:'Success'}))
router.route('/registermail').post(registermail)
router.route('/pregister').post(pregister)





router.route('/user/:username').get(getuser)
router.route('/getotp').get(verifyuser,localvariable,getotp)
router.route('/verifyotp').get(verifyotp)
router.route('/pdata').get(pdata)


router.route('/update').put(Auth,updateuser)
router.route('/createreset').get(resetSession)
router.route('/resetpass').put(verifyuser,resetpass)


module.exports=router