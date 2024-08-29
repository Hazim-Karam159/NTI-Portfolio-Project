const skillModel=require('../models/skillModel');


// skills.syncIndexes();
exports.createSkill=async(req,res)=> {
    try {
      const data = await skillModel.create(req.body);
      res.status(200).json({ message: "skill added successfully", skill: data });
    } catch (error) {
      res.status(500).json({ message: "something went wrong", error: error });
    }
};

exports.getSkills= async (req, res) => {
  const data = await skillModel.find();
  res.status(200).json({ data: data });
};



exports.deleteSkill= async (req, res) => {
  const deleted= await skillModel.findOne({ _id: req.params.id });
  const data = await skillModel.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "skill deleted successfully", data: deleted });
};


exports.updateSkill=async (req, res) => {
  const updated=await skillModel.findOne({ _id: req.params.id });
  const data = await skillModel.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.status(200).json({ message: "skill updated successfully", data: updated });
};