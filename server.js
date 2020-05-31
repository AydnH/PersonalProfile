const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log(`Live on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("API live");
});

app.post("./api/postdata", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "hooperaydn@gmail.com",
      pass: "F1s2t7r9aw10{}",
    },
  });

  var mailOptions = {
    to: "hooperaydn@gmail.com",
    subject: "contact form",
    html: `<p>${data.name}<p/>``<p>${data.email}<p/>``<p>${data.message},p/>`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});
