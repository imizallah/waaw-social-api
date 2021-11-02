const {Post} = require('../../models/Post');

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({success:false, msg: 'No such post'});

    if (post.likes.includes(req.user._id)) {
      await post.updateOne({$pull: { likes: req.user._id }});
      return res.status(200).json({success:true, msg: "Post unliked"});
    }else{
      await post.updateOne({$push: { likes: req.user._id }});
      return res.status(200).json({success:true, msg: "Post liked"});
    }
  
  }catch(err) {
    console.log(err)
  }
}

module.exports = likePost;