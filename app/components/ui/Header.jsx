'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
 
const links = [
    { label: "Inicio",
      href: "/"
    },
    {label:"Productos",
      href:"/productos/todos"
    },
    {label:"Nosotros",
      href:"/nosotros"
    },
    {label:"Contacto",
      href:"/contacto"
    },
    {label:"Admin",
      href:"/admin"
    }
  ]

export const Header = () => {
    const pathname = usePathname();
  return (
    <header className='w-full mainHeader'>
      <div className='container m-auto flex justify-evenly items-center'>  


      <nav className='container flex justify-evenly'>
            {links.map(link => {
                return(
                    <Link 
                    key= {link.label}
                    href={link.href}
                    className={`${pathname === link.href?'font-bold': ''}`}
                    >
                        {link.label}
                    </Link>
                )
            })}
          </nav>
      </div>
    </header>
  )
}
