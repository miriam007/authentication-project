const studentModel = require("../models/StudentModel");

module.exports.list=(req, res)=>{
    studentModel.find().exec().then((students)=>{
        return res.json(students)
    })
}

module.exports.currentStudent=(req, res)=>{
    studentModel.findOne({userId:req.user._id}).exec().then((student)=>{
        return res.json(student)
    })
}

module.exports.show= (req, res)=>{
    studentModel.findById(req.params.id).exec().then((student)=>{
        return res.json(student)
    })
}
// changed aboutme and learningstyle to camelcase, hopefully didnt break anything
module.exports.create=(req,res)=>{
    const s=new studentModel({
        userId:req.body.userId,
        level:req.body.level,
        name:req.body.name,
        aboutMe:req.body.aboutMe,
        learningStyle:req.body.learningStyle,
        strengths:req.body.strengths,
        weaknesses:req.body.weaknesses
    });
    s.save().then(savedStudent=>{
        return res.json(savedStudent)
    })
}

module.exports.update= (req,res) => {
    studentModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, studentUpdate)=>{
            if(err) return res.status(500).send(err);
            return res.send(studentUpdate)
        }
    )
}