'use client';
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

const links = [
    {label:"todos" ,href:"/productos/todos" },
    {label:"electricos" ,href:"/productos/electricos" },
    {label:"neumaticos" ,href:"/productos/neumaticos" },
    {label:"combustion" ,href:"/productos/combustion" }
];



export const CategoriesMenu = () => {
    const pathname = usePathname()
    const [open,setOpen] = useState(false)

    const toggleMenu = () => {
      setOpen(!open)
    }
  return (
    <aside className='flex flex-col gap-3 mt-20 py-10 italic text-xl'>
              <button
                onClick={toggleMenu}
                className={` bg-yellow-500 text-white rounded transition-all duration-300 ${open ? "h-0 overflow-hidden" : "h-auto"}`}
            >
                {open ? "" : "Show Categories"}
            </button>
            <div className={` overflow-hidden transition-all duration-500 ${open ? "max-h-96 mt-2 px-4  py-2" : "max-h-0"}`}>
          {links.map(link => (
              <Link
              key={link.label}
              href={link.href}
              className={`${pathname === link.href ? "font-semibold border-b" : ""}py-2 m-top `} >
              {link.label}    
              </Link>
          ))
        }
        </div>
    </aside>
  )
}
