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
    
    const {categorias} = params;
    return(<>
        <section className="container m-auto c1">

            <div >
                <CategoriesMenu />
               
            </div>
        </section>
        <section className="container m-auto mt-100">
        <ProductList categoria={categorias}/>
        </section>
        </>
    )
}

export default Productos

