import React from 'react'
import Carrousel from '../components/nosotros/carrousel/Carrousel'
import './Nosotros.css'

export const Nosotros = ()=> {

  const props = {
    autoPlay: true,
    showButtons: false
  };
  return (
    <section className='nosotros size-full items-center text-center mt-100 flex justify-center'>
      <div className='mt-30 pt-40'>
        <Carrousel autoPlay={props.autoPlay} showButtons={props.showButtons}/>   
      </div>  
    </section>
  )
}

export default Nosotros