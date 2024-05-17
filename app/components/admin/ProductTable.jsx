import Image from "next/image"
import Link from "next/link"
import { Boton } from "../ui/Boton"
const ProductTable = async () => {
    const items = await fetch(`http://${process.env.AUTH_DOMAIN}/api/productos/todos`,{cache: "no-store"}).then(r => r.json())

    return(
        <div className="overflow-x-auto">
            <table className="w-full text-s text-left text-gray-600">
                <thead>
                    <tr>
                            <th scope="col" className="px-3 py-2">Nombre</th>
                            <th scope="col" className="px-3 py-2">Precio</th>
                            <th scope="col" className="px-3 py-2">Categoria</th>
                            <th scope="col" className="px-3 py-2">Stock</th>
                            <th scope="col" className="px-3 py-2">Descripcion</th>
                            <th scope="col" className="px-3 py-2">Id</th>
                            <th scope="col" className="px-3 py-2">Imagen</th>
                            <th scope="col" className="px-3 py-2">Acciones</th>
                    </tr>

                </thead> 
                    <tbody>
                        {
                            items.map((item) =>(
                                <tr key={item.id}>
                                    <td className="p-2">{item.title}</td>
                                    <td className="p-2">$ {item.price}</td>
                                    <td className="p-2">{item.categoria}</td>
                                    <td className="p-2">{item.stock}</td>
                                    <td className="p-2">{item.description}</td>
                                    <td className="p-2">{item.id}</td>
                                    <td className="p-2">
                                     <Image
                                     src={`/products-img/${item.image}`}
                                     alt={item.title}
                                     width={80}
                                     height={80}
                                     />
                                        </td>
                                    <td className="p-2">
                                        <Boton className="bg-green-400">
                                            <Link href={`http://${process.env.AUTH_DOMAIN}/admin/edit`}>editar</Link>
                                        </Boton>
                                    </td>
                                </tr>
                            ))

                        }    
                    </tbody>   
 
            </table>
                                         <Boton className="bg-orange-400">
                                            <Link href={`http://${process.env.AUTH_DOMAIN}/admin/create`}>Crear +</Link>
                                        </Boton>
        </div>
    )

}

export default ProductTable;
/*   <Link href={`/admin/edit/${item.id}`}>
                                            Editar
                                        </Link>*/