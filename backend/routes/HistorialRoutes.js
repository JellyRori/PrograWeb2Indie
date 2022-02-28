const express = require('express');
const router = express.Router();

const historial_controller = require('../controllers/HistorialController');

router.post("/Historial",historial_controller.Historial_create);
router.get("/Historial/:id",historial_controller.Historial_getById);
router.put("/Historial/:id",historial_controller.Historial_update);
router.delete("/Historial/:id",historial_controller.Historial_delete);


module.exports=router;