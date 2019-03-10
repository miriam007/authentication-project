const tutorModel = require("../models/TutorModel");

module.exports.list=(req, res)=>{
    tutorModel.find().exec().then((tutordata)=>{
        return res.json(tutordata)
    })
}

module.exports.show= (req, res)=>{
    tutorModel.findById(req.params.id).exec().then((tutordata)=>{
        return res.json(tutordata)
    })
}

module.exports.create=(req,res)=>{
    const t=new tutorModel({
        level:req.body.level,
        name:req.body.name,
        aboutme:req.body.aboutme,
        teachingstyle:req.body.teachingstyle,
        strengths:req.body.strengths
    });
    t.save().then(savedTutor=>{
        return res.json(savedTutor)
    })
}

module.exports.update= (req,res) => {
    tutorModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, tutorUpdate)=>{
            if(err) return res.status(500).send(err);
            return res.send(tutorUpdate)
        }
    )
}