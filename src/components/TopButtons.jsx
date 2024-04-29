import React from 'react'

function TopButtons({setQuery}) {
   const cities = [
    {
        id:1,
        title: 'Kolkata'
    },
    {
        id:2,
        title: 'London'
    },
    {
        id:3,
        title: 'Tokyo'
    },
    {
        id:4,
        title: 'Toronto'
    },
    {
        id:5,
        title: 'Paris'
    },

]
  return (
    <div className="flex items-center justify-evenly my-6 w-full">
        {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium hover:bg-orange-400 p-2 rounded-2xl hover:shadow-2xl transition ease-out hover:scale-105' onClick={()=>setQuery({q: city.title})}>{city.title}</button>
        ))}
        
    </div>
  )
}

export default TopButtons