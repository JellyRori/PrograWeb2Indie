const express = require('express');
const router = express.Router();

const portafolio_controller = require('../controllers/PortafolioController');

router.post("/Portafolio",portafolio_controller.Portafolio_create);
router.get("/Portafolio/:id",portafolio_controller.Portafolio_getById);
router.put("/Portafolio/:id",portafolio_controller.Portafolio_update);
router.delete("/Portafolio/:id",portafolio_controller.Portafolio_delete);


module.exports=router;
 