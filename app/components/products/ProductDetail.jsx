import React from 'react';
import Image from 'next/image';
import QuantSelec from './QuantSelec';

export const ProductDetail = async ({id}) => {
    
    const item = await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/api/producto/${id}`,{cache:"no-store"}).then(r => r.json()).catch(Error)

  

    console.log('item detail',item);
    
  return (
    <div className='max-w-4xl m-auto py-40 justify-center items-center'>
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
