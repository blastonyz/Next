'use client'
import { useState } from "react";
import { Boton } from "../ui/Boton";
import {db, storage} from "../../firebase/firebaseConfig.js";
import {doc, updateDoc} from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"


const updateProduct = async (id, values, file) => {
    let fileURL = values.image;

    if(file){
        const storagRef = ref(storage, values.id)
        const fileSnapshot = await uploadBytes(storagRef, file)
        fileURL = await getDownloadURL(fileSnapshot.ref) 
    }
    const docRef = doc(db, "productos", id)
    return updateDoc(docRef,{
        title: values.title,
        price: values.price,
        categoria: values.categoria,
        stock: values.stock,
        description: values.description,
        id:values.id,
        image:fileURL
    }).then(()=>console.log("Producto Actualizado"));
}


const EditForm = ({item}) => {
    const {title, price, categoria, stock, description, id, image} = item
    const [values,setValues] = useState({title, price, categoria, stock, description, id, image})
    const [file,setFile] = useState(null)

    const handleChange = (e) => {
        setValues({...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await updateProduct(item.id, values, file)
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
            className="p-2 rounded w-full border border-blue-600 block my-4"
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])} />
            <Boton type='submit' className="items-center m-auto"  >Enviar</Boton>
        </form>
    </div>
    )
}        

export default EditForm;