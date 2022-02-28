const express = require('express');
const router = express.Router();

const donacion_controller = require('../controllers/DonacionController');

router.post("/Donacion",donacion_controller.Donacion_create);
router.get("/Donacion/:id",donacion_controller.donacion_getById);
router.put("/Donacion/:id",donacion_controller.Donacion_update);
router.delete("/Donacion/:id",donacion_controller.Donacion_delete);


module.exports=router;