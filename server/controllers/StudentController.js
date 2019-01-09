const studentModel = require("../models/StudentModel");

module.exports.list=(req, res)=>{
    studentModel.find().exec().then((studentdata)=>{
        return res.json(studentdata)
    })
}

module.exports.show= (req, res)=>{
    studentModel.findById(req.params.id).exec().then((studentdata)=>{
        return res.json(studentdata)
    })
}

module.exports.create=(req,res)=>{
    const s=new studentModel({
        level:req.body.level,
        aboutme:req.body.aboutme,
        learningstyle:req.body.learningstyle,
        strenghts:req.body.strenghts,
        weaknesses:req.body.weaknesses
    });
    s.save().then(savedStudent=>{
        return res.json(savedStudent)
    })
}

module.exports.update= function update(req,res) {
    return res.json({theId: req.params.id});
}

module.exports.remove= function remove(req, res){
    return res.json({});
}