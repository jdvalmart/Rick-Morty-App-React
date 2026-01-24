import { useState, useEffect } from "react";
import { CharacterCard } from "./components/CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.DEV
    ? "/api/character"
    : "https://api.rickandmortyapi.com/api/character";

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Error al cargar personajes");
        }

        const data = await response.json();
        setCharacters(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [API_URL]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-10">
          Explorador de Rick and Morty
        </h1>

        {loading && (
          <p className="text-center text-lg text-gray-600">Cargando...</p>
        )}

        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
