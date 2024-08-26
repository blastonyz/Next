'use client'
import Link from "next/link"
import { useCartContext } from "../context/CartContext.jsx"
import Image from "next/image"

const CartWidget = () => {
    const {totalQty} = useCartContext()

    return(
        <Link href={"/cart"} className={`text-base text-slate-100 flex items-center pt-2 cartLink` }>
            <Image
            src={'/cart.png'}
            alt="cart icon"
            width={80}
            height={80}
            layout="intrinsic"
            className="filter-blur filter-brightness filter-contrast m-auto cart"/>
            <span className="text-l font-bold">{totalQty()}</span>
        </Link>
    )
}

export default CartWidget