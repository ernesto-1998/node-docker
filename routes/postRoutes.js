const express = require('express');

const postCotroller = require('../controllers/postController');

const router = express.Router();

router.route('/')
    .get(postCotroller.getAllPosts)
    .post(postCotroller.createPost);

router.route('/:id')
    .get(postCotroller.getOnePost)
    .patch(postCotroller.updatePost)
    .delete(postCotroller.deletePost);

module.exports = router;