const express = require('express');
const router = express.Router();
const verify = require('../../middleware/authjwt');
const upload = require('../../config/multerSetup');


const createPost = require('../../controllers/post/createPost');

router.route('/')
  .post(verify, upload.single('postMedia'), createPost)
  .get(verify);

module.exports = router;