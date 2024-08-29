const aboutModel = require("../models/aboutModel");

exports.createAbout = async (req, res) => {
  try {
    const about = await aboutModel.create(req.body);
    return res
      .status(200)
      .json({ message: "about added successfully", about: about });
  } catch (err) {
    console.log(err);
  }
};

exports.getAbout = async (req, res) => {
  try {
    const data = await aboutModel.find();
    return res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
  }
};


exports.updateAbout = async (req, res) => {
  try {
    const data = await aboutModel.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    console.log(req.body);
    const data1 = await aboutModel.findOne({ _id: req.params.id });
    res
      .status(200)
      .json({ message: "education updated successfully", about: data1 });
  } catch (err) {
    console.log(err);
  }
};
