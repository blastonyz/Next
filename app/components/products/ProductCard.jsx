import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const ProductCard = ({item}) => {
  return (<article className='basis-72 shadow-lg rounded'>
    <Link href={`/productos/detail/${item.id}`}
    className='flex flex-col'>
        <div className='px-4 border-t'>
            <Image
            alt={item.title}
            src={`/products-img/${item.image}`}
            width={250}
            height={250}
            style={{objectFit: "contain"}}/>

            
            <h4 className='text-sm'>{item.title}</h4>
            <h4 className='text-sm'>$ {item.price}</h4>
        </div>
    </Link>

          </article>
    
  )
}
