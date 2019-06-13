const mongoose = require("mongoose");
const User = require("./models/user");
const Post = require("./models/post");
const Page = require("./models/page");
const Posts = require("./data/posts-data");
const KamakuraPosts = require("./data/kamakura-posts-data");
const BlacqPosts = require("./data/blacq-posts-data");
const SokenPosts = require("./data/soken-posts-data");
const Pages = require("./data/pages-data");

var connection = mongoose.connect("mongodb://localhost:27017/vivefaux", {
  useNewUrlParser: true
});

// var connection = mongoose.connect(
//   "mongodb://vivefaux_user:Kagome!!123@ds221095.mlab.com:21095/vivefaux"
// );

let names = ["Thomas"];

let results = names.map(name => ({
  name,
  username: `@${name.toLowerCase()}`,
  email: `${name}@gmail.com`,
  password: "123456"
}));

results.map(user => {
  let newUser = new User(user);
  newUser
    .save()
    .then(err => {
      if (err) {
        console.log("err:", err);
      }

      Posts.map(postData => {
        const post = new Post({ ...postData, author: newUser._id });
        return post.save();
      });

      KamakuraPosts.map(postData => {
        const post = new Post({
          ...postData,
          author: newUser._id,
          tags: ["kamakura"]
        });
        return post.save();
      });

      BlacqPosts.map(postData => {
        const post = new Post({
          ...postData,
          author: newUser._id,
          tags: ["blacq"]
        });
        return post.save();
      });

      SokenPosts.map(postData => {
        const post = new Post({
          ...postData,
          author: newUser._id,
          tags: ["soken"]
        });
        return post.save();
      });

      Pages.map(pageData => {
        const page = new Page({
          ...pageData,
          author: newUser._id
        });
        return page.save();
      });
    })
    .catch(err => {
      if (err) {
        console.log(err);
        return;
      }
    });
});
