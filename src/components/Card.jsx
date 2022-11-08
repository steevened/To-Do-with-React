import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='w-5/6 h-5/6 bg-gray-800 rounded-sm shadow-md shadow-slate-900 relative'>
      {children}
    </div>
  )
}

export default Card
