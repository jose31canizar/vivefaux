var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var randomize = require("randomatic");
require("dotenv").config();

const { CLIENT_USER, CLIENT_ID, SECRET, REFRESH_TOKEN } = process.env;

const index = (req, res, next) => {
  //3LO Authentication
  var serverConfig = {
    gmail: {
      client_user: CLIENT_USER,
      client_id: CLIENT_ID,
      secret: SECRET,
      refresh_token: REFRESH_TOKEN
    }
  };
  // create reusable transport method (opens pool of SMTP connections)
  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: serverConfig.gmail.client_user,
      clientId: serverConfig.gmail.client_id,
      clientSecret: serverConfig.gmail.secret,
      refreshToken: serverConfig.gmail.refresh_token
    }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: `${req.body.name} <${req.body.email}>`, // sender address
    to: "officialfaux@gmail.com", // list of receivers
    subject: `✔ ${req.body.subject} from ${req.body.email}`,
    text: req.body.message, // plaintext body
    html: `${req.body.message}` // html body
  };

  // send mail with defined transport object
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent to " + response.accepted);
      console.log({ forgotPasswordVerificationCode: randomCode });
      res.send({
        forgotPasswordVerificationCode: randomCode
      });
    }

    // if you don't want to use this transport object anymore, uncomment following line
    smtpTransport.close(); // shut down the connection pool, no more messages
  });
};

module.exports = {
  index
};
