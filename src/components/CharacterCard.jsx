import React from 'react'

export const CharacterCard = ({name, image, species, status}) => {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105'>
        <img src={image} alt={name} className='w-full h-48 object-cover' />
        <div className='p-4'>
            <h2 className='text-xl font-bold text-gray-800'>{name}</h2>
            <p className='text-gray-600'>Especies: {species}</p>
            <span className={`inline-block px-2 py-1 text-sm rounded-full mt-2
            ${status === 'Alive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status}
            </span>

        </div>

    </div>
  )
}

