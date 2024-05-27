import React from 'react';
import { ProductCard } from './ProductCard.jsx';


export const ProductList = async ({ categoria }) => {
<<<<<<< HEAD
    const items = await fetch(`http://${process.env.AUTH_DOMAIN}/api/productos/${categoria}`,{cache:"no-store"}).then(r => { 
    if(!r.ok){
        throw new Error
    }    
     return  r.json()})
    
=======
    const items = await fetch(`http://${process.env.VERCEL_URL}/api/productos/${categoria}/`,{cache:"no-store"}).then(r => r.json())
    console.log('items',items);
>>>>>>> 5bb28f983b7c9670debc8867deeec7bfe16821c4

    return (
        <section className='container m-auto soyProdList min-h-full'>
             <div className='flex flex-wrap justify-center gap-10 min-h-full'>
            {items.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
        </section>
    );
}

