'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartWidget from './CartWidget.jsx';
import { Menu } from './Menu.jsx';
import { useState } from 'react';

 
const links = [
    { label: "Inicio",
      href: "/"
    },
    {label:"Productos",
      submenu: [
        {label:"electricos" ,href:"/productos/electricos" },
        {label:"neumaticos" ,href:"/productos/neumaticos" },
        {label:"combustion" ,href:"/productos/combustion" }
      ]
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
  const [collapse,setCollapse] = useState(false)
  const[openCat,setOpenCat] = useState(null)
  const pathname = usePathname();

  const menuClick = () => {
    setCollapse(!collapse);
}  
  const openCatMenu = () => {
      setOpenCat(!openCat)
      console.log('state',openCat);
      
  }
 
  return (
    <header className='w-full mainHeader'>
      <div className='container m-auto flex justify-between items-center w-full headContainer'>  
        
      <div className='w-24 h-auto pt-4 menuNav'>
        <Menu collapse={collapse} menuClick={menuClick} />
      </div>

        <nav className={`container ${collapse ? '' : 'hiddenMenu'} flex  navBar`}>
          
              {links.map((link, index) =>{
                 return link.submenu?(
                 <React.Fragment key={index}>
                  <p className={`menu-item hover:bg-black hover:font-bold rounded relative ${pathname.startsWith('/productos') ? 'font-bold' : ''}`}
                  onClick= {link.label === "Productos" ? openCatMenu : undefined}
                  style={{ cursor: link.label === "Productos" ? 'pointer' : 'default' }}
                  >{link.label}
                  </p>
                   <aside className={`${openCat? 'subOpen': 'hidden'}`}> 
                {openCat && (
                  <div className='rounded aSideCont'>
                    {link.submenu.map(sublink => (
                      <Link 
                        key={sublink.label} 
                        href={sublink.href} 
                        className={`${pathname === sublink.href ? 'font-bold' : ''} subLink block px-4 py-2 hover:bg-black hover:text-white`}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                       </div>
                )}
                  </aside>
                  </React.Fragment>
                 ) :(
                      <Link 
                      key= {link.label}
                      href={link.href}
                      className={`${pathname === link.href?'font-bold': ''} menu-item`}
                      >
                          <p className='menu-item hover:bg-black hover:font-bold rounded'>{link.label}</p>
                      </Link>
                  )
              })}
            </nav>
            
        <div className='cartCont'>
          <CartWidget/>
        </div>
      </div>
    </header>
    
  )
}
