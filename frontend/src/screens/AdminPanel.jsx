import { useState, useEffect } from "react";
import { fetchAllTrivias } from "../api/TriviaApi"
import { useParams } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const AdminPanel = () => {
  const [trivias, setTrivias] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams()
  
  useEffect(() => {
    getTrivias();
  }, []);

  const getTrivias = async () => {
    try {
      const response = await fetchAllTrivias();
      setTrivias(response.data);
    } catch (error) {
      console.error("Error fetching trivias:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="h-screen bg-stone-800">
      <h1 className="text-center text-8xl pb-4 text-white font-mono">Trivias</h1>
      {trivias.length === 0 ? (
        <p className="text-center text-lg text-white">There are no trivia available at this time.</p>
      ) : (
        <ul className="flex flex-wrap overflow-auto h-[70%]">
          {trivias?.map((trivia) => (
            <li key={trivia._id} className="mb-6 p-2 mx-16 flex w-full lg:w-1/4 border-b bg-slate-400 shadow-md shadow-white  justify-between rounded-xl">
              <div className="flex flex-col">
              <h3 className="font-bold text-2xl">{trivia.title}</h3>
              <p>Trivia sobre: {trivia.description || "sin descripcion"}</p>
              <p>Activa Hasta: {new Date(trivia.activaHasta).toLocaleDateString()}</p>
              </div>
              <FaRegTrashAlt className="hover:cursor-pointer"/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;