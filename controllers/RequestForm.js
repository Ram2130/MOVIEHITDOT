// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   service: 'gmail',  // or your email provider
//   auth: {
//     user: 'your-email@gmail.com',  // Your email
//     pass: 'your-email-password',   // Your email password (use environment variables to keep it secure)
//   },
// });

// app.post('/send-email', (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: 'your-email@gmail.com',  // Replace with your email
//     subject: `Message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send('Error sending email');
//     }
//     res.status(200).send('Email sent');
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
