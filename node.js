

// "use strict";
// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main(){
//     let randomCode = Math.random().toString(36).substring(3,10).toUpperCase();
// //Math.random([10000,9999])
// //.toString(36).substring(2,7).toUpperCase();
// console.log(randomCode);
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "lequanghai.dtu2010", // generated ethereal user
//       pass: "thaonguyen2010" // generated ethereal password
//     }
//   });
//     const gmail = 'quanghaile2010@gmail.com';
//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: gmail, // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: `<p>Hãy nhập mã code nào vào form để đặt lại mật khẩu mới  ${randomCode} </p>`
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);


// // let randomCode = Math.random().toString(36).substring(3,10).toUpperCase();
// // //Math.random([10000,9999])
// // //.toString(36).substring(2,7).toUpperCase();
// // console.log(randomCode);

// // // Auto-gen a salt and hash
// // bcrypt.hash('bacon', 8, function (err, hash) {
// //     console.log(`Auto-gen: ${hash}`)
// // })
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = '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'
const gmail = 'quanghaile2010@gmail.com';
let randomCode = Math.random().toString(36).substring(3,10).toUpperCase();
sgMail.setApiKey(SENDGRID_API_KEY);
const msg = {
  to: gmail,
  from: 'test@example.com',
  subject:  "Hello ✔",
  text: "Hello world?",
  html: `<p>Hãy nhập mã code nào vào form để đặt lại mật khẩu mới  ${randomCode} </p>`
};
sgMail.send(msg);