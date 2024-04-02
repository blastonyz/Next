import React from 'react';
import { ProductCard } from './ProductCard.jsx';
import { productsMock } from '@/app/mock/productsMock.jsx';

export const ProductList = ({ categoria }) => {
    const allProducts = productsMock(); 
    const items = categoria === 'todos' ? allProducts : allProducts.filter(item => item.category === categoria);

    return (
        <section className='container m-auto flex flex-wrap h-full gap-10 py-10'>
            {items.map(item => <ProductCard key={item._id.$oid} item={item}/>)}
        </section>
    );
}