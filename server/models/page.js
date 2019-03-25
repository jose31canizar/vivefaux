const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var pageSchema = new Schema(
  {
    title: { type: String, required: true },
    path: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    content: { type: String, required: true },
    tags: [{ type: String }],
    type: { type: String, required: true },
    icon: { type: String },
    color: { type: String },
    private: { type: Boolean, required: true }
  },
  { collection: "vivefaux.pages" }
);

module.exports = mongoose.model("page", pageSchema);
