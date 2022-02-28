const express = require('express');
const router = express.Router();

const indie_controller = require('../controllers/IndieController');



router.get("/indie", indie_controller.usuario_getall);
router.post("/indie",indie_controller.indie_create);
router.put("/indie/:id",indie_controller.indie_update);
router.delete("/indie/:id",indie_controller.indie_delete);

module.exports=router;