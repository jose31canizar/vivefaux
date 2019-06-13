const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require("./post");
const Page = require("./page");
const bcrypt = require("bcrypt-nodejs");

var Promise = require("bluebird");
Promise.promisifyAll(mongoose);

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    posts: [{ type: Schema.ObjectId, ref: Post }],
    pages: [{ type: Schema.ObjectId, ref: Page }],
    rank: Number,
    verified: Boolean,
    updated: {
      type: Date,
      default: Date.now
    },
    age: {
      type: Number,
      min: 18,
      max: 65
    },
    following: [{ type: Schema.ObjectId, ref: this }],
    followers: [{ type: Schema.ObjectId, ref: this }],
    // likes: [{ type: Schema.ObjectId, ref: Post }],
    birthday: Date,
    gender: String,
    metadata: {
      reported: Boolean
    }
  },
  { collection: "vivefaux.users" }
);

userSchema.pre("save", function(next) {
  var user = this;
  var salt = bcrypt.genSaltSync(10);
  bcrypt.hash(user.password, salt, null, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

userSchema.statics.signup = function(
  { name, username, email, password },
  callback
) {
  var user = new userModel({
    name,
    username,
    email,
    password
  });

  user.save((err, res) => {
    if (err) {
      return callback(err);
    }
    return callback(err, user);
  });
};

// authenticate input against database
userSchema.statics.authenticate = function(email, password, callback) {
  userModel.findOne({ email: email }).exec(function(err, user) {
    if (err) {
      return callback(err);
    } else if (!user) {
      var err = new Error("User not found.");
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, user.password, function(err, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    });
  });
};

module.exports = mongoose.model("user", userSchema);
