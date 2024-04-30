import React from 'react';
import { ProductCard } from './ProductCard.jsx';


export const ProductList = async ({ categoria }) => {
    const items = await fetch(`http://${process.env.VERCEL_URL}/api/productos/${categoria}`,{cache:"no-store"}).then(r => { 
    if(!r.ok){
        throw new Error
    }    
     return  r.json()})
    console.log('items',items);

    return (
        <section className='container m-auto'>
             <div className='flex flex-wrap justify-center gap-10 pt-40'>
            {items.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
        </section>
    );
}

/*import React from 'react';
import { ProductCard } from './ProductCard.jsx';


export const ProductList = async ({ categoria }) => {
    const items = await fetch(`http://${process.env.VERCEL_URL}/api/productos/${categoria}`,{cache:"no-store"}).then(r => r.json())
    console.log('items',items);

    return (
        <section className='container m-auto'>
             <div className='flex flex-wrap justify-center gap-10 pt-40'>
            {items.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
        </section>
    );
}*/

/*import React from 'react';
import { ProductCard } from './ProductCard.jsx';


export const ProductList = async ({ categoria }) => {
    try{
        const response = await fetch(`http://${process.env.VERCEL_URL}/api/productos/${categoria}`,{cache:"no-store"})
        if(!response.ok){
            throw new Error
        }
        const items = await response.json()
        console.log('items', items);
        return items
    }catch(error){
        console.error(error)
    }
  

    return (
        <section className='container m-auto'>
             <div className='flex flex-wrap justify-center gap-10 pt-40'>
            {items.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
        </section>
    );
}*/