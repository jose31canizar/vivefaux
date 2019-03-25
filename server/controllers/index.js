module.exports = {
  createPost: require("./create-post"),
  getPost: require("./get-single-post"),
  getPosts: require("./get-posts"),
  deletePost: require("./delete-post"),
  likePost: require("./like-system/like-post"),
  unlikePost: require("./like-system/unlike-post"),
  follow: require("./follow-system/follow"),
  unfollow: require("./follow-system/unfollow"),
  getFollowees: require("./follow-system/get-followees"),
  getFollowers: require("./follow-system/get-followers")
};
