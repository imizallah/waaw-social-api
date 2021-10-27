const {Post} = require('../../models/Post');

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find({}).populate('user');
    if (!allPosts) return res.status(500).json({success: false, msg: 'No posts found'});

    return res.status(200).json({
      success: true, 
      msg: 'All posts', 
      allPosts
    })

  }catch(err) {
    return res.status(500).json({success: false, msg: err.message});
  }
}

module.exports = getAllPosts;