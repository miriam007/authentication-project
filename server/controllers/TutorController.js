// const tutorModel = require("../models/TutorModel");

// module.exports.list=(req, res)=>{
//     tutorModel.find().exec().then((tutordata)=>{
//         return res.json(tutordata)
//     })
// }

// module.exports.show= (req, res)=>{
//     tutorModel.findById(req.params.id).exec().then((tutordata)=>{
//         return res.json(tutordata)
//     })
// }

// module.exports.create=(req,res)=>{
//     const t=new tutorModel({
//         level:req.body.level,
//         aboutme:req.body.aboutme,
//         teachingstyle:req.body.teachingstyle,
//         strenghts:req.body.strenghts
//     });
//     t.save().then(savedTutor=>{
//         return res.json(savedTutor)
//     })
// }

// module.exports.update= function update(req,res) {
//     return res.json({theId: req.params.id});
// }

// module.exports.remove= function remove(req, res){
//     return res.json({});
// }