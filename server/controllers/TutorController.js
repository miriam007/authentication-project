const tutorModel = require("../models/TutorModel");

module.exports.list=(req, res)=>{
    tutorModel.find().exec().then((tutordata)=>{
        return res.json(tutordata)
    })
}

module.exports.currentTutor=(req, res)=>{
    tutorModel.findOne({userId:req.user._id}).exec().then((tutor)=>{
        return res.json(tutor)
    })
}

module.exports.show= (req, res)=>{
    tutorModel.findById(req.params.id).exec().then((tutordata)=>{
        return res.json(tutordata)
    })
}

module.exports.create=(req,res)=>{
    const t=new tutorModel({
        userId:req.body.userId,
        level:req.body.level,
        name:req.body.name,
        aboutMe:req.body.aboutMe,
        teachingStyle:req.body.teachingStyle,
        strengths:req.body.strengths,
        contactMe:req.body.contactMe
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