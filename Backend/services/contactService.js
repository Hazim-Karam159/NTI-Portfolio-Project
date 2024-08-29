const ContactModel=require('../models/contactModel');


// Contacts.syncIndexes();
exports.createContact=async(req,res)=> {
    try {
      const data = await ContactModel.create(req.body);
      res.status(200).json({ message: "Contact added successfully", data: data });
    } catch (error) {
      res.status(500).json({ message: "something went wrong", error: error });
    }
};

exports.getContacts= async (req, res) => {
  const data = await ContactModel.find();
  res.status(200).json({ data: data });
};



exports.deleteContact= async (req, res) => {
  const deleted = await ContactModel.findOne({ _id: req.params.id });
  const data = await ContactModel.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Contact deleted successfully", data: deleted });
};


exports.updateContact=async (req, res) => {
  const updated=await ContactModel.findOne({ name: req.params.name });
  const data = await ContactModel.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.status(200).json({ message: "Contact updated successfully", data: updated });
};