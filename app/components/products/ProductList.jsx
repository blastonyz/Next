import React from 'react';
import { ProductCard } from './ProductCard.jsx';


export const ProductList = async ({ categoria }) => {
    console.log('fetch:',process.env.NEXT_PUBLIC_API_URL);
    const items = await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/api/productos/${categoria}`,{cache:"no-store"}).then(r => { 
    if(!r.ok){
        throw new Error
    }    
     return  r.json()})
    

    return (
        <section className='container m-auto soyProdList min-h-full'>
             <div className='flex flex-wrap justify-center gap-10 min-h-full'>
            {items.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
        </section>
    );
}

