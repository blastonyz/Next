import React from 'react'
import ProductTable from '../components/admin/ProductTable'
import LogoutButon from '../components/admin/LogoutButon'

export default function Admin () {
  return (
    <section className='top-20 py-20 text-center mt-20'>
        <h2 className='italic text-2xl bold bg-gray-100 rounded'> Panel de administracion </h2>
        <ProductTable/>
        <div className='mt-10'>
        <LogoutButon/>
        </div>
    </section>
  )
}
