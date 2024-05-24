 import './OrderMessage.css'
import Link from 'next/link'

 export const OrderMessage = () => {
        return(
         
            <div className="fixed size-full inset-0 flex flex-col justify-evenly z-50 order">
                <div className="w-3/4 items-center mx-auto flex justify-evenly transition-opacity duration-1500 bg-black rounded-xl bg-gradient-to-r from-black to-gray-100 ">
                    <h2 className='italic text-6xl bold text-yellow-300'>Gracias por su compra!</h2>
                   
                        <Link className="bg-yellow-400 text-white py-2 px-4 rounded-xl" href={'/'}>Inicio</Link>
                   
                </div>
           </div>
        )
 }