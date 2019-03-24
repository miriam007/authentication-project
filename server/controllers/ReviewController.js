const reviewModel = require("../models/ReviewModel");

module.exports.list=(req, res)=>{
    reviewModel.find().exec().then((reviewdata)=>{
        return res.json(reviewdata)
    })
}

module.exports.show= (req, res)=>{
    reviewModel.findById(req.params.id).exec().then((reviewdata)=>{
        return res.json(reviewdata)
    })
}

module.exports.create=(req,res)=>{
    const r=new reviewModel({
        date:req.body.date,
        level:req.body.level,
        review:req.body.review
    });
    r.save().then(savedReview=>{
        return res.json(savedReview)
    })
}

module.exports.update= (req,res) => {
    reviewModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, reviewUpdate)=>{
            if(err) return res.status(500).send(err);
            return res.send(reviewUpdate)
        }
    )
}

//need delete