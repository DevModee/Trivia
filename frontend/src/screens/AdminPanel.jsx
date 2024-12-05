import { useState, useEffect } from "react";
import { fetchAllTrivias } from "../api/TriviaApi"

const AdminPanel = () => {
  const [trivias, setTrivias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    getTrivias();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-center text-2x1 mb-4">Admin Panel</h1>
      {trivias.length === 0 ? (
        <p className="text-center text-lg">There are no trivia available at this time.</p>
      ) : (
        <ul>
          {trivias.map((trivia) => (
            <li key={trivia._id} className="mb-2 p-2 border-b">
              <h3 className="font-bold">{trivia.title}</h3>
              <p>{trivia.description}</p>
              <p>Activa Hasta: {new Date(trivia.activaHasta).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;