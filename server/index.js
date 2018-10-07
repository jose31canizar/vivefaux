const express = require("express");
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");
const bodyParser = require("body-parser");
require("dotenv").config();
var mc_api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILING_LIST_ID;
var sendMailHandler = require("./sendEmail").index;
var cors = require("cors");
// var mcache = require('memory-cache');

const app = express();
var router = express.Router();
app.use(cors());

// app.set('view engine', 'jade');

// const mailchimp = new Mailchimp(mc_api_key);

app.use(express.static(path.resolve(__dirname, "../client/", "build")));
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

router.post("/sendEmail", sendMailHandler);

app.use("/v1", router);

// app.get('/api/memberList', (req, res) => {
//   mailchimp.get(`/lists/${list_id}/members`)
//   .then(function(results){
//     res.send(results);
//   })
//   .catch(function(err){
//     res.send(err);
//   });
// });

// app.post("/api/addMember", (req, res) => {
//   mailchimp
//     .post(`/lists/${list_id}`, {
//       members: [
//         {
//           email_address: req.body.email_address,
//           status: "subscribed",
//           merge_fields: {
//             FNAME: req.body.merge_fields.firstName,
//             LNAME: req.body.merge_fields.lastName,
//             MESSAGE: req.body.merge_fields.message,
//             SUBJECT: req.body.merge_fields.subject
//           }
//         }
//       ],
//       update_existing: true
//     })
//     .then(function(results) {
//       console.log(results);
//     })
//     .catch(function(err) {
//       console.log(err);
//       res.send(err);
//     });
// });

// app.get('/', cache(10), (req, res) => {
//   setTimeout(() => {
//     res.render('index', { title: 'Hey', message: 'Hello there', date: new Date()})
//   }, 5000) //setTimeout was used to simulate a slow processing request
// })

// var cache = (duration) => {
//   return (req, res, next) => {
//     let key = '__express__' + req.originalUrl || req.url
//     let cachedBody = mcache.get(key)
//     if (cachedBody) {
//       res.send(cachedBody)
//       return
//     } else {
//       res.sendResponse = res.send
//       res.send = (body) => {
//         mcache.put(key, body, duration * 1000);
//         res.sendResponse(body)
//       }
//       next()
//     }
//   }
// }

//catch all handler
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "build", "index.html"));
});
const port = process.env.PORT || 9010;
app.listen(port);
console.log(`express app listening on port ${port}`);
