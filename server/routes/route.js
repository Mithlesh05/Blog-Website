import express from 'express';

// import { loginUser, singupUser } from '../controller/user-controller.js';

import { loginUser,signupUser } from '../controller/user-controller.js';

// import { signupUser } from '../controller/user_controller.js';

import { uploadImage, getImage } from '../controller/image-controller.js';
import { CreatePost,getAllPosts, getPost, updatePost, deletePost,  } from '../controller/post-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import { newComment,getComments, deleteComment } from '../controller/comment-controller.js';
import upload from '../utils/upload.js';

// import CreatePost from '../../client/src/components/create/CreatePost.jsx';

const router = express.Router();
router.post('/login', loginUser);
router.post('/signup', signupUser);

// router.post('/logout', logoutUser);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/create', authenticateToken,CreatePost);
router.get('/posts', authenticateToken, getAllPosts);
router.get('/post/:id', authenticateToken, getPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);

router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id', authenticateToken, getComments);
router.delete('/comment/delete/:id', authenticateToken, deleteComment)

export default router;
