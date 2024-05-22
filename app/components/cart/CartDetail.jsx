import Image from "next/image";
import { Boton } from "../ui/Boton";

export const CartDetail = ({item,delProduct}) =>{
    const subTotal = item.price * item.quantity;
   return(
   <div className='px-4 border-t rounded-md py-10 flex justify-between'>
    <Image
    alt={item.title}
    src={`/products-img/${item.image}`}
    width={250}
    height={250}
    style={{objectFit: "contain"}}/>
    <div className="items-center my-auto">
    <h4 className='text-sm'>cantidad: {item.quantity}</h4>
    <h4 className='text-sm'>{item.title}</h4>
    <h4 className='text-sm'>$ {item.price}</h4>
    <h4 className='text-sm'>$sub {subTotal}</h4>
    </div>
    <section>
    <Boton onClick={()=>delProduct(item.id)} className="flex items-end" >eliminar</Boton>
    </section>
    </div>
)
}