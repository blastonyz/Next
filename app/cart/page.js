'use client'
import { CartDetail } from "../components/cart/CartDetail";
import { useCartContext } from "../components/context/CartContext";
import Link from "next/link";

export default function Cart(){
    const {cart,delProduct,priceTotal} = useCartContext();

    return (
      <>
        <main className="mb-auto flex flex-col justify-between p-10 mt-60">
          <h1 className="text-3xl font-bold items-center text-center
          ">Carrito</h1>
          <hr />
          {cart.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <CartDetail item={item} key={item.id} delProduct={delProduct} />
              ))}
            </ul>
          )}
          <hr />
          <h4 className="text-right">Total: ${priceTotal()}</h4>
          <Link href={"/cart/checkout"} className="bg-green-400 w-40 rounded items-center text-center">Comprar   $$</Link>
        
        </main>
       
      </>
    );
    
}