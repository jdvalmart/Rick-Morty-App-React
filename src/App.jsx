import { useState, useEffect } from 'react'
import {CharacterCard}   from './components/CharacterCard';


function App() {
  
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        if (!response.ok) throw new Error('Error al cargar personajes')
        const data = await response.json()
        setCharacters(data.results)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])


  return (
    <div className='min-h-screen bg-gray-100 p-8'>
        <div className='container mx-auto'>
          <h1 className='text-4xl font-extrabold text-center text-indigo-600 mb-10'>Explorador de Rick and Morty</h1>  
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {characters.map((character) => (
                 <CharacterCard key={character.id} {...character} />
            ))}
          </div>
        </div>
      </div> 
  )
}

export default App
