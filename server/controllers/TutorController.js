// const tutorUser = require("../models/TutorModel");
// const tokenForTutorUser = require("../services/token").tokenForTutorUser;
// const hash = require("../services/hash").hash;

// function create(req, res, next) {
//   const { email, password } = req.body;
//   const t = email;
//   // If no email or password was supplied return an error
//   if (!email || !password) {
//     return res.status(422)
//     .json({ error: "You must provide an email and password" });
//   }
//   console.log("Look for a tutor user with the email");
//   tutorUser.findOne({ email: t}).exec()
//   .then((existingTutorUser) => {
//       // If the tutor user exist return an error on sign up
//     if (existingTutorUser) {
//       console.log("This email is already being used");
//       return res.status(422).json({ error: "Email is in use" });
//     }
//     console.log("This email is free to use");
//     saveTutorUser(email,password,(token) => {
//       res.json(token);
//     });
//   })
//   .catch(err => next(err));
// }

// function saveTutorUser(email,password,done) {
//   hash(password, null,function (hashedPassword) {
//     // Create a new tutor user with the supplied email, and the hashed password
//     const tutorUser = new TutorUser({ email, password: hashedPassword });
//     console.log("Saving the tutor user");
//     tutorUser.save()
//       .then(t => {
//         console.log("Tutor user has been saved to database");
//         done({ token: tokenForTutorUser(t) });
//       });
//   });
// }

// exports.create = create;