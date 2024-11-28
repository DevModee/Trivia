import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const questionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  value: {
    type: Boolean,
    required: true,
  },
});

const triviaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  activaHasta: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
  preguntas: [questionSchema],
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
  }
}, {
  timestamps: true
});

const Trivia = model('Trivia', triviaSchema);

export default Trivia;