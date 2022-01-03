import { useState, useEffect } from 'react'
import './EditProducts.css'
import { useParams, useNavigate } from 'react-router-dom'
// import { Layout } from '../../components'
import { getProduct, updateProduct } from '../../services/products'

function EditProducts() {

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

  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
    }
    fetchProduct()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateProduct(id, product)
    nav(`/products/${id}`)
  }

  return (
    <div>
      {/* <Layout user={props.user}> */}
      <div className='helper-text'>
        <h3>Edit your product here, you can edit only the field that needs changing.</h3>
      </div>
      <div className='edit-form'>
        <form onSubmit={handleSubmit}>
          <input placeholder='Image URL' value={product.imgURL} name='imgURL' required onChange={handleChange} />
          <input placeholder='Name' value={product.name} name='name' required onChange={handleChange} />
          <input placeholder='Condition' value={product.condition} name='condition' required onChange={handleChange} />
          <input placeholder='Location' value={product.location} name='location' required onChange={handleChange} />
          <input placeholder='Price' value={product.price} name='price' required onChange={handleChange} />
          {/* <select placeholder='Category' value={product.category} name="category" required onChange={handleChange}>
            <option value="Electronics">Electronics</option>
            <option value="Home Furniture">Home Furniture</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Games">Games</option>
            <option value="Clothing">Clothing</option>
          </select> */}
          <input placeholder='Description' value={product.description} name='description' required onChange={handleChange} />
          <button>Edit</button>
        </form>
      </div>
      {/* </Layout> */}
    </div>
  )
}

export default EditProducts
