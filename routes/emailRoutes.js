const express = require("express");
const router = express.Router();
const transporter = require("../config/emailConfig");


router.options("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://doradorockllc.com");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.send();
});

router.post("/", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    html: `
          <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phone}</p>
        <p>Message: ${message}</p>
          `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

module.exports = router;
