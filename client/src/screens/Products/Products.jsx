import React from 'react'
import ProductCards from '../../components/ProductCards/ProductCards'

function Products({products}) {


  return (
    <div className='all-products'>
    <ProductCards products={products}/>
    </div>
  )
}

export default Products
