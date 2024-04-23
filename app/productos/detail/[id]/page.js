import React from 'react';
import { ProductDetail } from '@/app/components/products/ProductDetail';


const DetailPage = ({params}) => {
    
    const { id } = params
    console.log('page id', id);
    return (
        <ProductDetail id={id} />
    );
};

export default DetailPage;