import { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateTriviaForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const [newAnswerCorrect, setNewAnswerCorrect] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [adminId, setAdminId] = useState("");
  const [activaHasta, setActivaHasta] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get("/admin");
        setAdmins(response.data);
      } catch (error) {
        console.error("Error fetching admins:", error.response?.data || error.message);
      }
    };
    fetchAdmins();
  }, []);

  const addAnswer = () => {
    if (newAnswer.trim() === "") return;
    setQuestions([...questions, { text: newAnswer, correct: newAnswerCorrect }]);
    setNewAnswer("");
    setNewAnswerCorrect(false);
  };

  const removeAnswer = (index) => {
    const updatedAnswers = questions.filter((_, i) => i !== index);
    setQuestions(updatedAnswers);
  };

  const handleSubmit = async () => {
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!activaHasta) {
      setErrorMessage("Por favor selecciona una fecha válida para activaHasta.");
      return;
    }

    if (!adminId) {
      setErrorMessage("Por favor selecciona un administrador.");
      return;
    }

    // Convertir las respuestas a las opciones y respuesta correcta
    const formattedQuestions = questions.map((answer) => ({
      question: title, // En el modelo, la pregunta es el título
      options: [answer.text], // Almacenamos las opciones, pero aquí puedes agregar más si es necesario
      correctAnswer: answer.correct ? answer.text : "", // Si es correcta, se marca como respuesta correcta
    }));

    const triviaData = {
      adminId,
      title,
      description,
      preguntas: formattedQuestions,
      activaHasta: activaHasta.toISOString().split("T")[0], // Formato de fecha esperado por el backend
    };

    try {
      const response = await axios.post("/trivia", triviaData);
      setSuccessMessage("Trivia creada exitosamente.");
      setErrorMessage(null);

      // Limpiar formulario después de éxito
      setTitle("");
      setDescription("");
      setQuestions([]);
      setActivaHasta(null);
      setAdminId("");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error al crear la trivia.");
      console.error("Error al enviar trivia:", error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto bg-zinc-900 p-6 rounded-md">
      <h2 className="text-white text-xl mb-4">Crear Trivia</h2>
      {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}
      {successMessage && <div className="text-green-500 text-sm mb-4">{successMessage}</div>}

      <div className="mb-4">
        <label className="text-white mb-2 block">Seleccionar Administrador:</label>
        <select
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 text-white"
        >
          <option value="">-- Seleccionar --</option>
          {admins.map((admin) => (
            <option key={admin._id} value={admin._id}>
              {admin.username}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        placeholder="Título de la Trivia"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-zinc-800 text-white"
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-zinc-800 text-white"
      ></textarea>

      <div className="mb-4">
        <label className="text-white mb-2 block">Fecha Activa Hasta:</label>
        <DatePicker
          selected={activaHasta}
          onChange={(date) => setActivaHasta(date)}
          dateFormat="dd/MM/yyyy"
          className="w-full p-2 rounded bg-zinc-800 text-white"
        />
      </div>

      <div className="mb-4">
        <label className="text-white mb-2 block">Agregar Respuestas:</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Escribe una respuesta"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            className="flex-1 p-2 rounded bg-zinc-800 text-white"
          />
          <select
            value={newAnswerCorrect}
            onChange={(e) => setNewAnswerCorrect(e.target.value === "true")}
            className="p-2 rounded bg-zinc-800 text-white"
          >
            <option value={false}>Incorrecta</option>
            <option value={true}>Correcta</option>
          </select>
          <button
            onClick={addAnswer}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 rounded"
          >
            Agregar
          </button>
        </div>

        <ul className="list-disc pl-5 text-white">
          {questions.map((answer, index) => (
            <li key={index} className="flex justify-between items-center">
              {answer.text} - {answer.correct ? "Correcta" : "Incorrecta"}
              <button
                onClick={() => removeAnswer(index)}
                className="text-red-500 hover:text-red-400"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 hover:bg-green-500 text-white w-full py-2 rounded"
      >
        Crear Trivia
      </button>
    </div>
  );
};

export default CreateTriviaForm;
