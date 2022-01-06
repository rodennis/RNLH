import React from 'react'
import ProductCards from '../../components/ProductCards/ProductCards'
import Layout from '../../components/Layout/Layout'

function Products({products}, props) {

  return (
    <Layout user={props.user}>
    <div className='all-products'>
      <ProductCards products={products}/>
    </div>
    </Layout>
  )
}

export default Products
