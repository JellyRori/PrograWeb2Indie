const express = require('express');
const router = express.Router();

const juego_controller = require('../controllers/JuegoController');

router.post("/Juego",juego_controller.juego_create);
router.get("/Juego/:id",juego_controller.juego_getById);
router.put("/Juego/:id",juego_controller.juego_update);
router.delete("/Juego/:id",juego_controller.juego_delete);


module.exports=router;
 