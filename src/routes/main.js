const express=require ('express')
const router =express.Router()


const{main,about,login,register,processLogin,processRegister}=require('../controllers/mainController');
router.get('/',main)
router.get('/about',about)

router.get('/login',login)
router.post('/login',processLogin)
router.get('/register',register)
router.post('/register',processRegister)


module.exports=router