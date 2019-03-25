const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const posts = require("./controllers/posts");
const allPosts = posts.posts;
const postsByTag = posts.postsByTag;
const pages = require("./controllers/pages");
const allPages = pages.pages;
const pagesByPrivacy = pages.pagesByPrivacy;

const app = express();
var router = express.Router();

mongoose.connect("mongodb://localhost/vivefaux");
// mongoose.connect(
//   "mongodb://vivefaux_user:Kagome!!123@ds221095.mlab.com:21095/vivefaux"
// );
const mongooseConnection = mongoose.connection;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use(
//   session({
//     secret: "topsecret",
//     resave: true,
//     saveUninitialized: false,
//     store: new MongoStore({
//       mongooseConnection,
//       collection: ""
//     })
//   })
// );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.options("*", function(req, res) {
  "use strict";
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).end();
});

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/posts", allPosts);
router.get("/posts-by-tag", postsByTag);
router.get("/pages", allPages);
router.get("/pages-by-privacy", pagesByPrivacy);

app.use("/v1", router);

const port = process.env.PORT || 9010;
app.listen(port);
console.log(`express app listening on port ${port}`);
