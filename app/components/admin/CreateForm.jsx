"use client"

import { useState } from "react"
import  {Boton}  from "../ui/Boton.jsx"
import {doc,setDoc} from "firebase/firestore"
import { db } from "@/app/firebase/firebaseConfig.js"

console.log('form importado');

const CreateProduct = async (values) => {
    /*
        const stringValueId = values.id.toString()
        console.log('id string',stringValueId)
        const docRef = doc(db, 'productos', stringValueId);
        console.log('referencia', docRef.path);
        try {
            console.log('values',values);
            await setDoc(docRef, { ...values });
            console.log("producto agregado");
        } catch (error) {
            console.error("Error al agregar producto:", error);
        }*/
    
    const docRef = doc(db,"productos", values.id)
    return  setDoc(docRef,{...values}).then(()=> console.log("producto agregado"))
    
}

const CreateForm = () => {
    const [values, setValues] = useState({
        title:'',
        price:0,
        categoria:'',
        stock:0,
        description: '',
        id:''

    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('e', e);
        
        const res = await CreateProduct(values)
      
        console.log('despues', res);
        return res    
    }

    return(
        <div className="container m-auto mt-30 pt-20 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label htmlFor="title" >Nombre: </label>
                <input type="text"
                value={values.title}
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                id="title"
                name="title"
                onChange={handleChange} />
                
                <label htmlFor="price" >Precio: </label>
                <input type="number"
                value={values.price}
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                id="price"
                name="price"
                onChange={handleChange} />

                <label htmlFor="categoria">Categoria: </label>
                <input type="text"
                value={values.categoria}
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                id="categoria"
                name="categoria"
                onChange={handleChange} />

                <label htmlFor="stock">Stock: </label>
                <input type="number"
                value={values.stock}
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                id="stock"
                name="stock"
                onChange={handleChange} />

                <label htmlFor="description">Descripcion: </label>
                <textarea type="text"
                value={values.description}
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                id="description"
                name="description"
                onChange={handleChange} />

                <label htmlFor="id">Identificador: </label>
                <input type="text"
                value={values.id}
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                id="id"
                name="id"
                onChange={handleChange} />
                <Boton type='submit' >Enviar</Boton>
            </form>
        </div>
    )
}

export default CreateForm;