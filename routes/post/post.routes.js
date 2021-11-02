const express = require('express');
const router = express.Router();
const verify = require('../../middleware/authjwt');
const upload = require('../../config/multerSetup');


const createPost = require('../../controllers/post/createPost');
const getAll = require('../../controllers/post/getAll');
const likePost = require('../../controllers/post/likePost');


router.route('/')
  .post(verify, upload.single('postMedia'), createPost)
  .get(verify, getAll);

router.put('/:id/like', verify, likePost);

module.exports = router;