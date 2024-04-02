'use client';
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {label:"todos" ,href:"/productos/todos" },
    {label:"electricos" ,href:"/productos/electricos" },
    {label:"neumaticos" ,href:"/productos/neumaticos" },
    {label:"combustion" ,href:"/productos/combustion" }
];



export const CategoriesMenu = () => {
    const pathname = usePathname()
  return (
    <aside className='flex flex-col gap-3 top-20 py-10'>
        {links.map(link => (
            <Link
            key={link.label}
            href={link.href}
            className={`${pathname === link.href ? "font-semibold border-b" : ""}py-2 m-top`} >
            {link.label}    
            </Link>
        ))

        }
    </aside>
  )
}
