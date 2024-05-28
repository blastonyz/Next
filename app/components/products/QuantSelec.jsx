'use client';
import  {Boton}  from "../ui/Boton";
import  Counter  from "../ui/Counter";
import { useState } from "react";
import { useCartContext } from "../context/CartContext.jsx";

const QuantSelec = ({item}) => {

    const {addToCart} = useCartContext()

    const [quantity,setQuantity] = useState(1)
        console.log('quantity sel',quantity);

    const handleAdd = () => {
     
       addToCart({
        ...item,
       quantity: quantity
       })
       console.log('cantidad agregada: ',quantity)
    }
    console.log('cantidad despues de counter',quantity);
    return(
        <div className="flex flex-col gap-5 mt-6">
            <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
           
            <Boton className="w-full hover:bg-yellow-300" onClick={handleAdd}>Agregar al Carrito</Boton>
        </div>
    )
}

export default QuantSelec;

