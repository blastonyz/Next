'use client'
import { createContext, useContext, useState } from "react"


const CartContext =  createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    console.log('cart',cart);
    
    const addToCart = (item) => {
        setCart([...cart,item])
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const totalQty = () => {
        return cart.reduce((acc,item) => acc + item.quantity,0)
    }

    const productsOrder = () => {
         const products = cart.map(({ title,price, quantity,id }) => ({ title,price, quantity,id }))
         return products
    }

    const priceTotal = () => {
        const sub = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);
        return sub
    }   

    const delProduct = (id) => {
        const delProduct = cart.filter(item => item.id !== id);
        console.log('producto borrado',delProduct);
        setCart(delProduct)
        
    }

    const emptyCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart,addToCart,addToCart,isInCart,totalQty,emptyCart,delProduct,priceTotal,productsOrder}}>
            {children}
         </CartContext.Provider>
    )

}