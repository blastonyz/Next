import fs from 'fs';
import path from 'path'

export const productsMock = () => {
     
      const filePath = path.resolve('./app/mock/ecommerce.products.json');
      const productsData = fs.readFileSync(filePath, 'utf-8');
      const productsMock = JSON.parse(productsData);
      
     
  return productsMock
  
}
