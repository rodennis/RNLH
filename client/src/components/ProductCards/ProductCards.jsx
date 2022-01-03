import React from 'react'
import './ProductCards.css'

function ProductCards({products}) {
  return (
    <div>
      {
        products.map(product => (
          <div className='product-card-div'>
            <h2>
              {product.name}
            </h2>
            <img src={product.imgURL} alt="" />
          </div>
      ))
      }
    </div>
  )
}

export default ProductCards
