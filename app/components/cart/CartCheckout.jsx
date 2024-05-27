'use client'

import { useState } from "react"
import { Boton } from "../ui/Boton"
import {doc,setDoc,Timestamp, writeBatch,getDoc} from "firebase/firestore"
import {db} from "@/app/firebase/firebaseConfig"
import { useCartContext } from "../context/CartContext"
import { OrderMessage } from "./OrderMessage/OrderMessage"

const CreateOrder = async (values) => {
    console.log('values',values);
    const docPromises = values.products.map(async (item) => {
        const docRef = doc(db, "productos", item.id);
        const documentSnapshot = await getDoc(docRef);
        console.log('documentSnapshot', documentSnapshot);
        return { id: item.id, data: documentSnapshot.data() };
    });

    const docs = await Promise.all(docPromises);
    console.log('docs', docs);

    const batch = writeBatch(db);
    const outOfStock = [];

    docs.forEach(({ id, data }) => {
        if (data) {
            const inStock = data.stock; 
            const itemInCart = values.products.find(item => item.id === id);
            console.log('itemInCart', itemInCart);

            if (itemInCart.quantity <= inStock) {
                batch.update(doc(db, "productos", id), { stock: inStock - itemInCart.quantity });
            } else {
                outOfStock.push(itemInCart);
            }
        } else {
            outOfStock.push(values.products.find(item => item.id === id));
        }
    });

    console.log('outOfStock', outOfStock);
    if (outOfStock.length > 0) return outOfStock;

    const order = {
        client: {
            email: values.email,
            address: values.address,
            phone: values.phone
        },
        items: values.products.map(item => ({
            title: item.title,
            price: item.price,
            id: item.id,
            quantity: item.quantity
        })),
        date: new Date().toISOString(),
        total: values.priceTotal
    };

    const docId = Timestamp.fromDate(new Date()).toMillis().toString();
    const orderRef = doc(db, "orders", docId);
    console.log('order', order);

    await batch.commit();
    console.log('Batch committed');

    await setDoc(orderRef, order);
    console.log('Order created with ID:', docId);

    return docId;
};

const CartCheckout = () => {
    const { priceTotal, productsOrder, emptyCart } = useCartContext();

    const [values, setValues] = useState({
        priceTotal: priceTotal(),
        email: '',
        products: productsOrder(),
        address: '',
        phone: '',
        date: new Date().toISOString()
    });

    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await CreateOrder(values);
        emptyCart();
        console.log('CreateOrder result', result);
        if (Array.isArray(result)) {
            setMessage('Algunos productos están fuera de stock.');
        } else {
            setMessage('Su compra fue realizada con éxito!');
        }
    };

        return(
            <div className="container m-auto mt-10 pt-20 max-w-lg">
                <h2 className="italic text-cl bold text-center bg-gray-300">Detalles de su Compra</h2>
                <div>{message? <OrderMessage/>:null }</div>
                
                <h4 className="non-italic text-m">Total: {values.priceTotal}</h4>
                <section>
                <h4 className="non-italic text-m">Productos:{
                    values.products.map(item=>{
                        return( 
                        <div key={item.id}>
                        <h4>{item.title}</h4>
                        <h4>cantidad: {item.quantity}</h4>
                        </div>
                    )
                    })
                    }</h4>
                </section>
            <div className="container m-auto mt-30 pt-20 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label htmlFor="email" >E-mail: </label>
                <input type="email"
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                name="email"
                onChange={handleChange} />
                
                <label htmlFor="phone" >Cel: </label>
                <input type="number"
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                name="phone"
                onChange={handleChange} />

                <label htmlFor="address">Direccion: </label>
                <input type="text"
                required
                className="p-2 rounded w-full border border-blue-600 block my-4"
                name="address"
                onChange={handleChange} />

                     <Boton type='submit' className="text-center items-center m-auto bg-orange-400"  >Comprar</Boton>
                </form>
                </div>
                </div>
        )
    }

    export default CartCheckout;

