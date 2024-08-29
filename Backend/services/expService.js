const expModel = require("../models/experienceModel");

exports.createExperience = async (req, res) => {
  try {
    const { tools = [], description = [], fromDate, toDate } = req.body;

    // Ensure tools and description are arrays before using join
    req.body.description = Array.isArray(description) ? description.join(",") : "";
    req.body.tools = Array.isArray(tools) ? tools.join(",") : "";

    req.body.fromDate = new Date(fromDate).toISOString().split("T")[0];
    req.body.toDate = new Date(toDate).toISOString().split("T")[0];

    const exp = await expModel.create(req.body);
    return res.status(200).json({ message: "Experience added successfully", experience: exp });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};


exports.getExperience = async (req, res) => {
  try {
    const data = await expModel.find().sort({ fromDate: -1 });
    return res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const deleted = await expModel.findOne({ _id: req.params.id });
    await expModel.deleteOne({ _id: req.params.id });
    return res.status(200).json({ message: "experience deleted successfully", experience: deleted });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const { tools, description } = req.body;
    req.body.description = description.join(",");
    req.body.tools = tools.join(",");
    await expModel.updateOne({ _id: req.params.id }, { $set: req.body });
    const afterUpdate = await expModel.findOne({ _id: req.params.id });
    return res.status(200).json({ message: "experience updated successfully", experience: afterUpdate });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
