const express = require('express');
const router = express.Router();

const blog_controller = require('../controllers/BlogController');

router.post("/Blog",blog_controller.Blog_create);
router.get("/Blog/:id",blog_controller.Blog_getById);
router.put("/Blog/:id",blog_controller.Blog_update);
router.delete("/Blog/:id",blog_controller.Blog_delete);



module.exports=router;