import Admin from "../models/admin.model.js";

export const registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = new Admin({ username, password });
    await admin.save();
    res.status(201).json({ message: 'Created', admin });
  } catch (error) {
    res.status(400).json({ message: 'Error on create admin', error });
  }
};

export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Error getting admins' });
  }
};

export const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) {
      return res.status(400).json({ message: 'Admin not found' });
    }
    res.status(200).json({ message: 'Success, admin deleted: ', admin });
  } catch (error) {
    res.status(500).json({ message: 'Error on delete admin: ', error });
  }
};