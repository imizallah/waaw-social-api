const {Post} = require('../../models/Post');
const cloudinary = require('cloudinary').v2;
const cloudinarySetup = require('../../config/cloudinarySetup');


const createNewPost = async (req, res) => {
  let {title, description, mediaType} = req.body;

  if (!title || !description || !mediaType) return res.status(400).json({msg: 'All fields are required'});
  // if(req.file.mimeType != 'image/*' || req.file.mimeType != 'video/*') return res.status(400).json({msg: 'Only Images or Videos are allowed'});

  await cloudinarySetup();

  const uploadedMedia = await cloudinary.uploader.upload(req.file.path, 
    { resource_type: "auto"}
  );

  const newPost = new Post({
    user: req.user._id,
    title, 
    description,
    mediaType,
    media: uploadedMedia.secure_url
  });

  if(!newPost) return res.status(500).json({msg: 'An error has occurred'})

  await newPost.save();

  return res.status(201).json({
    msg: 'Post created',
    newPost
  });
}

module.exports = createNewPost;