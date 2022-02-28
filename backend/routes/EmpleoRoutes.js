const express = require('express');
const router = express.Router();

const empleo_controller = require('../controllers/EmpleoController');

router.post("/Empleo",empleo_controller.Empleo_create);
router.get("/Empleo/:id",empleo_controller.Empleo_getById);
router.put("/Empleo/:id",empleo_controller.Empleo_update);
router.delete("/Empleo/:id",empleo_controller.Empleo_delete);

module.exports=router;