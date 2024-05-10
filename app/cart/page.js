'use client'
import { CartDetail } from "../components/cart/CartDetail";
import { useCartContext } from "../components/context/CartContext";

export default function Cart(){
    const {cart,delProduct} = useCartContext();

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
        </main>
       
      </>
    );
    
}