'use client'
import Link from "next/link"
import { useCartContext } from "../context/CartContext.jsx"
import Image from "next/image"

const CartWidget = () => {
    const {totalQty} = useCartContext()

    return(
        <Link href={"/cart"} className={`text-base text-slate-100 flex items-center pt-2 pl-2 w-20 h-20 cartLink` }>
            <Image
            src={'/cart.png'}
            alt="cart icon"
            width={80}
            height={80}
            layout="intrinsic"
            className="filter-blur filter-brightness filter-contrast relative inset-0 m-auto cart"/>
            <span className="pr-10">{totalQty()}</span>
        </Link>
    )
}

export default CartWidget