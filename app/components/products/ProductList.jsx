import React from 'react';
import { ProductCard } from './ProductCard.jsx';


export const ProductList = async ({ categoria }) => {
    const items = await fetch(`http://${process.env.AUTH_DOMAIN}/api/productos/${categoria}`,{cache:"no-store"}).then(r => { 
    if(!r.ok){
        throw new Error
    }    
     return  r.json()})
    

    return (
        <section className='container m-auto soyProdList'>
             <div className='flex flex-wrap justify-center gap-10 pt-10'>
            {items.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
        </section>
    );
}

