import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const ProductCard = ({item}) => {
  return (<article className='basis-72 shadow-lg rounded transform transition-transform hover:scale-105 rounded-md'>
    <Link href={`/productos/detail/${item.id}`}
    className='flex flex-col'>

        <div className='px-4 border-t rounded-md object-contain'>

            <Image
            alt={item.title}
            src={`/products-img/${item.image}`}
            width={250}
            height={250}
            style={{objectFit: "contain"}}
            loading='lazy'
            decoding='async'/>

            
            <h4 className='text-sm'>{item.title}</h4>
            <h4 className='text-sm'>$ {item.price}</h4>
        </div>
    </Link>

          </article>
    
  )
}
