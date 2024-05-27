import React from 'react'
import ContactForm from '../components/contacto/ContactForm.jsx'

export default function Contacto () {
  return (
    <section className='pt-40 pb-20 text-center min-h-screen flex flex-col justify-start items-center nosotros'>
        <h2 className='Italic text-xl bold'> Contacto</h2>
        <div className='mt-20 w-full flex justify-center'>
        <ContactForm/>
        </div>
    </section>
  )
}
