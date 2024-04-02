import { ProductList } from "@/app/components/products/ProductList";
import { CategoriesMenu } from "@/app/components/products/CategoriesMenu";

const Productos = ({params}) => {
    console.log(params);
    const {categorias} = params;
    return(
        <main className="container m-auto">

            <div className="flex gap-10">
                <CategoriesMenu/>
                <ProductList categoria={categorias}/>
            </div>
        </main>
       
    )
}

export default Productos