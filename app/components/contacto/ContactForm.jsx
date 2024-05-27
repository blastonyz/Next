'use client'

import { useState } from "react"
import  {Boton}  from "../ui/Boton.jsx"


const ContactForm = () => {
    const [value, setValue] = useState({
        email: '',
        text:''
    })

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
   
    }

    return(
                <form onSubmit={handleSubmit} className="mx-auto w-1/2 flex flex-col items-center">
                    <input name="email" type="email" required placeholder="Email" className="p-2 rounded w-1/2 border border-yellow-400" onChange={handleChange}/>
                    <textarea name="text" required placeholder="Mensaje" className="resize-none w-1/2 h-24 my-10 rounded border border-yellow-400" onChange={handleChange}></textarea>
                    <Boton type= "submit" className="mt-10">Enviar</Boton>
                </form>
    )
}

export default ContactForm