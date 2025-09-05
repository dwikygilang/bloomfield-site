// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('.')); // serve folder sekarang

app.post('/send_mail', (req, res) => {
  const { name, email, msg } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dwiky@dream-grid.com',
      pass: 'ylnqhprryuzjmfbg'
    }
  });

  let mailOptions = {
    from: 'dwiky@dream-grid.com',
    to: 'dwiky@dream-grid.com',
    subject: 'New Sales Inquiry',
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${msg}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.send('Failed: ' + err);
    res.send("Thanks! We'll get back to you soon.");
  });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));

