import Productos from "./productos/[categorias]/page.js"
import { ProductList } from "./components/products/ProductList";

export default function Home() {
  return (
   <main>
    <Productos params={"todos"}/>
    <ProductList categoria={"todos"}/>
   </main>
    
  );
}
