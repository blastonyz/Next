
import React from 'react';
import { productsMock } from '@/app/mock/productsMock.jsx';
import Image from 'next/image';
import QuantSelec from './QuantSelec';
export const ProductDetail = ({_id}) => {
    const allProducts = productsMock(); 
    const item = allProducts.find(p => p._id.$oid === _id)
    
  return (
    <div className='max-w-4xl m-auto py-10 justify-center'>
        <section>
           <Image
            alt={item.title}
            src={`/products-img/${item.image}`}
            width={450}
            height={450}
            style={{objectFit: "contain"}}/>
            <h2>{item.title}</h2>
            <h2>$ {item.price}</h2>
            <h2>Descripcion: {item.description}</h2>
            <h2>Categoria: {item.category}</h2>
            <h2>Stock: {item.stock}</h2>
            <QuantSelec item={item}/>
        </section>   
    </div>
  )
}
