const express = require('express');
const router = express.Router();

const comentario_controller = require('../controllers/ComentarioController');

router.post("/Comentario",comentario_controller.Comentario_create);
router.get("/Comentario/:id",comentario_controller.Comentario_getById);
router.put("/Comentario/:id",comentario_controller.Comentario_update);
router.delete("/Comentario/:id",comentario_controller.Comentario_delete);




module.exports=router;