import React from 'react';
import { ProductCard } from './ProductCard.jsx';


export const ProductList = async ({ categoria }) => {
    const items = await fetch(`http://${process.env.VERCEL_URL}/api/productos/${categoria}/`,{cache:"no-store"}).then(r => r.json())
    console.log('items',items);

    return (
        <section className='container m-auto'>
             <div className='flex flex-wrap justify-center gap-10 pt-40'>
            {items.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
        </section>
    );
}