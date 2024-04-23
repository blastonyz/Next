import React from 'react';
import { ProductCard } from './ProductCard.jsx';


export const ProductList = async ({ categoria }) => {
    const items = await fetch(`http://localhost:3000/api/productos/${categoria}`,{cache:"no-store"}).then(r => r.json())
    console.log('items',items);

    return (
        <section className='container m-auto flex flex-wrap h-full gap-10 py-10'>
            {items.map(item => <ProductCard key={item.id} item={item}/>)}
        </section>
    );
}