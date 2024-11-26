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

