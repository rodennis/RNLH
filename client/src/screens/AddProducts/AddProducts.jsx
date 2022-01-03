import { useState } from 'react'
import './AddProducts.css'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../../services/products'

function AddProducts(props) {

  let nav = useNavigate();

  const [product, setProduct] = useState({
    imgURL: '',
    name: '',
    condition: '',
    location: '',
    price: '',
    // category: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createProduct(product)
    nav('/products')
  }

  return (
    <div>
      <Layout user={props.user}>
        <div className='main-create'>
          <div className='sub-create'>
            <div className='helper-text'>
              <h3>Add your product here, all fields are required and must be detailed.</h3>
            </div>
            <div className='create-form'>
              <h1>ADD NEW PRODUCT</h1>
              <form onSubmit={handleSubmit}>
                <label>Image URL:</label>
                <input placeholder='Image URL' value={product.imgURL} name='imgURL' required onChange={handleChange} />
                <label>Product Name:</label>
                <input placeholder='Product Name' value={product.name} name='name' required onChange={handleChange} />
                <label>Condition:</label>
                <input placeholder='Condition' value={product.condition} name='condition' required onChange={handleChange} />
                <label>Location:</label>
                <input placeholder='Location' value={product.location} name='location' required onChange={handleChange} />
                <label>Price:</label>
                <input placeholder='Price' value={product.price} name='price' required onChange={handleChange} />
                {/* <label>Category</label>
                <select placeholder='Category' value={product.category} name="category" required onChange={handleChange}>
                  <option value="" disabled selected>Select your Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Home Furniture">Home Furniture</option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="Games">Games</option>
                  <option value="Clothing">Clothing</option>
                </select> */}
                <label>Description:</label>
                <textarea placeholder='Description' value={product.description} name='description' required onChange={handleChange} />
                <button type='submit'>ADD</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default AddProducts
