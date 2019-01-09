// const studentUser = require("../models/StudentModel");
// const tokenForStudentUser = require("../services/token").tokenForStudentUser;
// const hash = require("../services/hash").hash;

// function create(req, res, next) {
//   const { email, password } = req.body;
//   const s = email;
//   // If no email or password was supplied return an error
//   if (!email || !password) {
//     return res.status(422)
//     .json({ error: "You must provide an email and password" });
//   }
//   console.log("Look for a student user with the email");
//   studentUser.findOne({ email: s}).exec()
//   .then((existingStudentUser) => {
//       // If the student user exist return an error on sign up
//     if (existingStudentUser) {
//       console.log("This email is already being used");
//       return res.status(422).json({ error: "Email is in use" });
//     }
//     console.log("This email is free to use");
//     saveStudentUser(email,password,(token) => {
//       res.json(token);
//     });
//   })
//   .catch(err => next(err));
// }

// function saveStudentUser(email,password,done) {
//   hash(password, null,function (hashedPassword) {
//     // Create a new student user with the supplied email, and the hashed password
//     const studentUser = new StudentUser({ email, password: hashedPassword });
//     console.log("Saving the student user");
//     studentUser.save()
//       .then(s => {
//         console.log("Student user has been saved to database");
//         done({ token: tokenForStudentUser(s) });
//       });
//   });
// }

// exports.create = create;