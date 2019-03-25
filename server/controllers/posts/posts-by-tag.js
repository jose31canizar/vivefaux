const Post = require("../../models/post");

module.exports = (req, res) => {
  return Post.find({ tags: req.query.tag })
    .lean()
    .exec((err, posts) => {
      res.json(posts);
    });
};
