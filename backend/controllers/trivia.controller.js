import Trivia from "../models/trivia.model.js"
import Admin from "../models/admin.model.js"

export const createTrivia = async (req, res) => {
    const { adminId, title, description, preguntas, activaHasta } = req.body;

    if (!activaHasta) {
        return res.status(400).json({ message: "`activaHasta` is required in the request body." });
    }

    try {
        const admin = await Admin.findById(adminId);
        if (!admin) {
            return res.status(401).json({ message: "Unauthorized: Invalid admin ID" });
        }

        const trivia = new Trivia({ adminId, title, description, preguntas, activaHasta });
        await trivia.save();

        res.status(201).json({ message: "Trivia created successfully", trivia });
    } catch (error) {
        res.status(500).json({ message: "Error creating trivia", error });
    }
}