import React from 'react'
import ProductCards from '../../components/ProductCards/ProductCards'
import './Products.css'

function Products({products}) {


  return (
    <div>
     <ProductCards products={products}/>
    </div>
  )
}

export default Products
