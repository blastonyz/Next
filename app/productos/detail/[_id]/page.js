
import React from 'react';
import { ProductDetail } from '@/app/components/products/ProductDetail';


const DetailPage = ({params}) => {
    
    const { _id } = params

    return (
        <ProductDetail _id={_id} />
    );
};

export default DetailPage;