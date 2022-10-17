const express=require ('express')
const router =express.Router()

const{crear,editar,eliminar,list}=require('../controllers/adminController');
const adminLogs=require('../middlewares/adminLogs')

router.get('/',adminLogs,list)
router.get('/crearProducto',crear)
router.get('/editarProducto',editar)
router.get('/eliminarProducto',eliminar)


module.exports=router