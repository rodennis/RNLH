import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Products from './screens/Products/Products'
import {getProducts} from './services/products'
import {useEffect, useState} from 'react'
import Home from './screens/Home/Home'
import EditProducts from './screens/EditProducts/EditProducts'
import AddProducts from './screens/AddProducts/AddProducts'
import ProductDetails from './screens/ProductDetails/ProductDetails'
import Contact from './screens/Contact/Contact'
import { verifyUser } from './services/users'
import SignIn from './screens/SignIn/SignIn'

// import ProductDetails from './screens/ProductDetails/ProductDetails'
import Nav from './components/Nav/Nav'

import SignUp from './screens/SignUp/SignUp'
import SignOut from './screens/SignOut/SignOut'


function App() {

  const[products, setProducts] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const user = await verifyUser()
        user ? setUser(user) : setUser(null)
      }
      fetchUser()
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    const response = async () => {
      try {
        const res = await getProducts('/products')
        console.log(res)
      setProducts(res)
      } catch (error) {
        console.log(error)
      }
    }
    response()

  }, [])
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path={'/'} element={<Home />}/> 
        <Route path={'/products'} element={<Products products={products} />}/> 
        <Route path={'/products/:id'} element={<ProductDetails user={user} />} />
        <Route path={'/products/:id/edit'} element={<EditProducts user={user} />} /> 
        <Route path={'/add-product'} element={<AddProducts user={user}/>} /> 
        <Route path={'/contact'} element={<Contact />}/> 
        {/* <Route path={'/add-product'} element={user ? <AddProducts user={user}/> : <Navigate to='/sign-up' />}/>  */}
        <Route path='/signIn' element={<SignIn setUser={setUser}/>}/> 
        <Route path='/sign-up' element={<SignUp setUser={setUser}/>}/>
        <Route path="/sign-out" element={<SignOut setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
