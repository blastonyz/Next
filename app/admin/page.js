import React from 'react'
import ProductTable from '../components/admin/ProductTable'
import LogoutButon from '../components/admin/LogoutButon'

export default function Admin () {
  return (
    <section className='top-20 py-20 text-center'>
        <h2> Admin</h2>
        <ProductTable/>
        <div className='mt-10'>
        <LogoutButon/>
        </div>
    </section>
  )
}
