import Admin from "../models/admin.model.js";

export const registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = new Admin({ username, password });
    await admin.save();
    res.status(201).json({ message: 'Administrador creado', admin });
  } catch (error) {
    console.error('Error al crear administrador:', error);
    res.status(400).json({ message: 'Error al crear el Administrador', error });
  }
};

export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    console.error('Error al obtener los administradores', error);
    res.status(500).json({ message: 'Error al obtener los administradores' });
  }
};

export const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) {
      return res.status(400).json({ message: 'Administrador no encontrado' });
    }
    res.status(200).json({ message: 'Administrador eliminado', admin });
  } catch (error) {
    console.error('Error al eliminar administrador:', error);
    res.status(500).json({ message: 'Error al eliminar el Administrador', error });
  }
};