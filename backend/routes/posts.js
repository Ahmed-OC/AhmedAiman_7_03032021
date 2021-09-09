const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts')
const multer = require('../middleware/multer-config')

router.post('/createPost',multer, postsCtrl.createPost);
router.get('/getAllPosts', postsCtrl.getAllPosts);
router.delete('/deletePost/:id',postsCtrl.deletePost);
module.exports=router;