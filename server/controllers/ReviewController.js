// // Connect to data (i.e. Model)
// const ReviewModel = require('../models/ReviewModel')

// module.exports.list=(req, res)=>{
//     ReviewModel.find().exec().then((review)=>{
//         return res.json(review)
//     })
// }

// module.exports.show= (req, res)=>{
//     ReviewModel.findById(req.params.id).exec().then((review)=>{
//         return res.json(review)
//     })
// }

// module.exports.create=(req,res)=>{
//     const r=new ReviewModel({
//         date:req.body.date,
//         level:req.body.level,
//         review:req.body.review
//     });
//     r.save().then(savedReview=>{
//         return res.json(savedReview)
//     })
// }

// module.exports.update= function update(req,res) {
//     return res.json({theId: req.params.id});
// }

// module.exports.remove= function remove(req, res){
//     return res.json({});
// }