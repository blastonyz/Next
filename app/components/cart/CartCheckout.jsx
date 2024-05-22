'use client'

import { useState } from "react"
import { Boton } from "../ui/Boton"
import {addDoc,collection} from "firebase/firestore"
import {db} from "@/app/firebase/firebaseConfig"
import { useCartContext } from "../context/CartContext"

const CreateOrder = async (values) => {
    const docRef = await addDoc(collection(db,"purchases"),values).then(()=> console.log("orden creada"))
    return docRef
}

const CartCheckout = () => {

    const {priceTotal,productsOrder} = useCartContext()

        const [values, setValues] = useState({
            priceTotal:priceTotal(),
            email:'',
            products:productsOrder(),
            adress:'',
            phone:''
            
        })
        
        const [message, setMessage] = useState(null);
        const handleChange = (e) => {
                 setValues({
                ...values,
                [e.target.name] : e.target.value
                  })
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            const order = await CreateOrder(values);
            order? setMessage('Su compra fue realizada con Exito!'):null;
        }


        return(
            <div className="container m-auto mt-10 pt-20 max-w-lg">
                <h2>Detalles de su Compra</h2>
                <p>{message}</p>
                <h4>Total: {values.priceTotal}</h4>
                <section>
                <h4>Productos:{
                    values.products.map(item=>{
                        return( 
                        <div key={item.id}>
                        <h4>{item.title}</h4>
                        <h4>cantidad: {item.quantity}</h4>
                        </div>
                    )
                    })
                    }</h4>
                </section>
            <div className="container m-auto mt-30 pt-20 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label htmlFor="email" >E-mail: </label>
                <input type="email"
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                name="email"
                onChange={handleChange} />
                
                <label htmlFor="phone" >Cel: </label>
                <input type="number"
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                name="phone"
                onChange={handleChange} />

                <label htmlFor="adress">Direccion: </label>
                <input type="text"
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                name="adress"
                onChange={handleChange} />

                     <Boton type='submit' className="text-center items-center m-auto"  >Comprar</Boton>
                </form>
                </div>
                </div>
        )
    }

    export default CartCheckout;

