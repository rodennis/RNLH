import React from 'react'
import './ProductCards.css'
import {Link} from 'react-router-dom'

function ProductCards({products}) {
  return (
    <div className='all-products'>
      {
        products.map(product => (
          <Link className='link' to={`/products/${product._id}`}>
          <div className='product-card-div'>
            <h2>
              {product.name}
            </h2>
            <img src={product.imgURL} alt="" />
          </div>
          </Link>
      ))
      }
    </div>
  )
}

export default ProductCards
