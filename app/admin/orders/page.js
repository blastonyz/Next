import LogoutButon from "@/app/components/admin/LogoutButon";
import { db } from "@/app/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


const getOrders = async () => {
    const orderRef = collection(db,"orders")
    const querySnapshot = await getDocs(orderRef)
    const docs = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
    return docs
}

const Orders = async () => {
    const orders = await getOrders()
    
    return(
        <div className="container m-auto mt-60 ">
            <div className="items-center m-auto flex justify-center">
            <LogoutButon/>
            </div>
           

            <h2 className="text-2xl text-center my-10 border-b pb-4 justify-center m-auto">Órdenes</h2>

            <ul className="p-5 container mx-auto text-center justify-center">
                {
                    orders.map(order => (
                        <li key={order.id} className="p-4 bg-yellow-300 my-10 rounded-xl border-4 border-gray-400 max-w-screen-md mx-auto">
                            <p className="font-italic text-xl text-blue-600">Correo electrónico: {order.client.email}</p>
                            <p className="font-italic text-xl text-blue-600">Teléfono: {order.client.phone}</p>
                            <p className="font-italic text-xl text-blue-600">Dirección: {order.client.address}</p>
                            <p>Fecha: {order.date}</p>
                            <p className="font-bold text-2xl ">Monto: {order.total}</p>
            <ul>
                    {
                        order.items.map(item => (
                            <li key={item.id}>
                                <p>Producto: {item.title}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio: {item.price}</p>
                            </li>
                        ))
                    }
             </ul>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default Orders;

/*   <ul>
                    {
                        order.items.map(item => (
                            <li key={item.id}>
                                <p>Producto: {item.title}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio: {item.price}</p>
                            </li>
                        ))
                    }
                </ul>*/