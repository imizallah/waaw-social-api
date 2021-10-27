const {Post} = require('../../models/Post');
const cloudinary = require('cloudinary').v2;
const cloudinarySetup = require('../../config/cloudinarySetup');


const createNewPost = async (req, res) => {
  let {description, mediaType} = req.body;

  if (!description) return res.status(400).json({msg: 'Please type a post'});

  let imageOrVideo = '';

  if (req.file) {
    await cloudinarySetup();

    const uploadedMedia = await cloudinary.uploader.upload(req.file.path, 
      { resource_type: "auto"}
    );

    imageOrVideo = uploadedMedia.secure_url;
  }

  const newPost = new Post({
    user: req.user._id,
    description,
    mediaType,
    media: imageOrVideo
  });

  if(!newPost) return res.status(500).json({ success: false, msg: 'An error has occurred'})

  await newPost.save();

  return res.status(201).json({
    success: true,
    msg: 'Post created',
    newPost
  });
}

module.exports = createNewPost;