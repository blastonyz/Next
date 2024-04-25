'use client'
import Link from "next/link"
import { useCartContext } from "../context/CartContext.jsx"
import Image from "next/image"

const CartWidget = () => {
    const {totalQty} = useCartContext()

    return(
        <Link href={"/cart"} className={`text-base text-slate-100 p-3 flex items-center cartLink` }>
            <Image
            src={'/cart.png'}
            alt="cart icon"
            width={75}
            height={75}
            className="filter-blur filter-brightness filter-contrast"/>
            <span>{totalQty()}</span>
        </Link>
    )
}

export default CartWidget