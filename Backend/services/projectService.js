const projectModel = require('../models/projectsModel');

exports.createProject = async (req, res) => {
  try {
    // Check if req.body.tools and req.body.languages are strings
    if (typeof req.body.tools === 'string') {
      req.body.tools = req.body.tools.split(",").map(item => item.trim());
    } else if (Array.isArray(req.body.tools)) {
      // Ensure tools is an array of strings
      req.body.tools = req.body.tools.map(item => item.toString().trim());
    } else {
      req.body.tools = []; // Default to empty array if not a string or array
    }

    if (typeof req.body.languages === 'string') {
      req.body.languages = req.body.languages.split(",").map(item => item.trim());
    } else if (Array.isArray(req.body.languages)) {
      // Ensure languages is an array of strings
      req.body.languages = req.body.languages.map(item => item.toString().trim());
    } else {
      req.body.languages = []; // Default to empty array if not a string or array
    }

    const data = await projectModel.create(req.body);
    res.status(201).json({ message: "Project added successfully", data: data });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};


exports.getProjects = async (req, res) => {
  try {
    const data = await projectModel.find();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve projects", error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const result = await projectModel.deleteOne({ _id: req.params.id });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Project not found" });
    }
    
    res.status(200).json({ message: "Project deleted successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete project", error: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const result = await projectModel.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    
    if (result.nModified === 0) {
      return res.status(404).json({ message: "Project not found or no changes made" });
    }
    
    res.status(200).json({ message: "Project updated successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to update project", error: error.message });
  }
};
