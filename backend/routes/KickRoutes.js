const express = require('express');
const router = express.Router();

const kick_controller = require('../controllers/KickController');

router.post("/Kick",kick_controller.kick_create);
router.get("/Kick/:id",kick_controller.kick_getById);
router.put("/Kick/:id",kick_controller.kick_update);
router.delete("/Kick/:id",kick_controller.kick_delete);


module.exports=router;