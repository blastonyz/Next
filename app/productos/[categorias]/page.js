import { ProductList } from "@/app/components/products/ProductList";
import { CategoriesMenu } from "@/app/components/products/CategoriesMenu";


export function generateStaticParams (){
    return [
        {categoria: 'electricos'},
        {categoria: 'combustion'},
        {categoria: 'neumaticos'}
    ]
}

export const revalidate = 3600

const Productos = ({params}) => {
    console.log(params);
    const {categorias} = params;
    return(
        <section className="container m-auto">

            <div className="flex gap-10 ">
                <CategoriesMenu/>
                <ProductList categoria={categorias}/>
            </div>
        </section>
       
    )
}

export default Productos