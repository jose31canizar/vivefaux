const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require("./comment.js");
const User = require("./user.js");

var postSchema = new Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    description: { type: String, required: true },
    links: [
      {
        name: String,
        url: String
      }
    ],
    author: { type: Schema.ObjectId, ref: User, required: true },
    likes: [{ type: Schema.ObjectId, ref: User }],
    reposts: [{ type: Schema.ObjectId, ref: User }],
    replies: [{ type: Schema.ObjectId, ref: Comment }],
    iframes: [{ type: String }],
    tags: [{ type: String }]
  },
  { collection: "vivefaux.posts" }
);

module.exports = mongoose.model("post", postSchema);
