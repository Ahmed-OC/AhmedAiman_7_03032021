const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts')
const multer = require('../middleware/multer-config')
const auth = require('../middleware/auth')

router.post('/createPost',auth,multer, postsCtrl.createPost);
router.get('/getAllPosts',auth, postsCtrl.getAllPosts);
router.delete('/deletePost/:id',auth,postsCtrl.deletePost);
router.put('/updatePost/:id',auth,multer, postsCtrl.updatePost);
router.get('/getPostsByNickname/:nickname',auth, postsCtrl.getPostsByNickname);
module.exports=router;