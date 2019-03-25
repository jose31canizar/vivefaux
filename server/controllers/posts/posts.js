const Post = require("../../models/post");

module.exports = (req, res) => {
  return Post.find({})
    .lean()
    .exec((err, posts) => {
      res.json(posts);
    });
};
