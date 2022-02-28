const express = require('express');
const router = express.Router();

const producto_controller = require('../controllers/ProductoController');

router.post("/Producto",producto_controller.Producto_create);
router.get("/Producto/:id",producto_controller.Producto_getById);
router.put("/Producto/:id",producto_controller.Producto_update);
router.delete("/Producto/:id",producto_controller.Producto_delete);


module.exports=router;