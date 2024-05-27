import React from 'react';
import { ProductDetail } from '@/app/components/products/ProductDetail';


const DetailPage = ({params}) => {
    
    const { id } = params
   
    return (
        <ProductDetail id={id} />
    );
};

export default DetailPage;