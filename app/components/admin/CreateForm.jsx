"use client"

import { useState } from "react"
import  {Boton}  from "../ui/Boton.jsx"
import {doc,setDoc} from "firebase/firestore"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { db, storage } from "@/app/firebase/firebaseConfig.js"

console.log('form importado');

const CreateProduct = async (values, file) => {
    const storageRef = ref(storage, values.id)
    const fileSnapshot = await uploadBytes(storageRef,file)

    const fileUrl = await getDownloadURL(fileSnapshot.ref)

    const docRef = doc(db,"productos", values.id)
    return  setDoc(docRef,{...values,image:fileUrl}).then(()=> console.log("producto agregado"))
    
}

const CreateForm = () => {
    const [values, setValues] = useState({
        title:'',
        price:0,
        categoria:'',
        stock:0,
        description: '',
        id:'',
        image:''
    })
    const [file,setFile] = useState(null)

    const handleChange = (e) => {
        const {name,value} = e.target;        setValues({
            ...values,
            [name]:value    })
    }

    const handleFile = (e) => {
        console.log(e.target.files);
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
            console.log("Archivo seleccionado:", e.target.files[0]);  // Imprime el archivo seleccionado
        } else {
            console.error("No se ha seleccionado ningún archivo");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('e', e);
        if (!file) {
            console.error("No se ha seleccionado un archivo");
            return;
        }
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
                
                <label htmlFor="file">Imagen: </label>
                <input type="file"
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                id="file"
                name="file"
                onChange={handleFile} />
                <Boton type='submit' className="items-center m-auto"  >Enviar</Boton>
            </form>
        </div>
    )
}

export default CreateForm;