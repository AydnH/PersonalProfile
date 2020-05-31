const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const creds = require("./config");

const app = express();

const port = process.env.PORT || 3100;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Live on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("API live");
});

app.post("/api/post", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: creds.USER,
      pass: creds.PASS,
    },
  });

  var mailOptions = {
    to: "hooperaydn@gmail.com",
    subject: "contact form",
    html: `<p>${data.name}<p/> <p>${data.email}<p/> <p>${data.message}<p/>`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      response.send(error);
    } else {
      response.send("Success");
    }
    smtpTransport.close();
  });
});
