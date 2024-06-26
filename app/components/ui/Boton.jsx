import React from 'react'

export const Boton = ({children, className='', ...args}) => {
  return (
   <button className={`rounded-xl py-2 px-3 bg-yellow-300 text-center text-white ${className}`}{...args}>
    {children}
   </button>
  )
}
