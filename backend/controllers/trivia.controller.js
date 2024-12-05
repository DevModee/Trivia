import Trivia from "../models/trivia.model.js"
import Admin from "../models/admin.model.js"
import mongoose from "mongoose";

export const createTrivia = async (req, res) => {
  const { adminId, title, description, preguntas, activaHasta } = req.body;

  if (!activaHasta) {
    return res.status(400).json({ message: "`activaHasta` is required in the request body." });
  }

  try {
    const admin = await Admin.findById(adminId);
    if (!mongoose.Types.ObjectId.isValid(adminId)) {
      return res.status(400).json({ message: "Invalid admin ID format" });
    }

    const trivia = new Trivia({ adminId, title, description, preguntas, activaHasta });
    await trivia.save();

    res.status(201).json({ message: "Trivia created successfully", trivia });
  } catch (error) {
    res.status(500).json({ message: "Error creating trivia", error });
  }
};

export const getAllTriviaDetails = async (req, res) => {
  try {
    const trivias = await Trivia.find().select("title activaHasta description");
    res.status(200).json(trivias);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trivia details", error });
  }
};

export const getTriviaById = async (req, res) => {
  const { trivia_id } = req.params;

  try {
    const trivia = await Trivia.findById(trivia_id);
    if (!trivia) {
      return res.status(404).json({ message: "Trivia not found" });
    }

    res.status(200).json(trivia);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trivia", error });
  }
};

export const updateTrivia = async (req, res) => {
  const { trivia_id } = req.params;
  const { title, description, preguntas, activaHasta } = req.body;

  try {
    const trivia = await Trivia.findById(trivia_id);
    if (!trivia) {
      return res.status(404).json({ message: "Trivia not found" });
    }

    if (title) trivia.title = title;
    if (description) trivia.description = description;
    if (preguntas) trivia.preguntas = preguntas;
    if (activaHasta) trivia.activaHasta = activaHasta;

    await trivia.save();

    res.status(200).json({ message: "Trivia updated successfully", trivia });
  } catch (error) {
    res.status(500).json({ message: "Error updating trivia", error });
  }
};

// Eliminar Trivia
export const deleteTrivia = async (req, res) => {
  const { trivia_id } = req.params;

  try {
    const trivia = await Trivia.findByIdAndDelete(trivia_id);
    if (!trivia) {
      return res.status(404).json({ message: "Trivia not found" });
    }

    res.status(200).json({ message: "Trivia deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting trivia", error });
  }
};

