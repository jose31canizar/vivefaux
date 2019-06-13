const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

var commentSchema = new Schema(
  {
    author: { type: Schema.ObjectId, ref: User, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now },
    replies: [{ type: Schema.ObjectId, ref: this }]
  },
  { collection: "vivefaux.comments" }
);

module.exports = mongoose.model("comment", commentSchema);
