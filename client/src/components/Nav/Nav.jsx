import React from 'react'
import './Nav.css'
import{Link} from 'react-router-dom'
import logo from '../../photos/background.png'

function Nav({user}) {

  const authenticatedOptions = (
    <>
        <Link className="link link-tags" to="/add-product">Add Product</Link>
        <Link className="link link-tags" to="/sign-out">Sign Out</Link>
    </>
)
const unauthenticatedOptions = (
    <>
        <Link className='link link-tags' to='/sign-in'>Sign In</Link>
        <Link className='link link-tags' to='/sign-up'>Sign Up</Link>
    </>
)
const alwaysOptions = (
    <>
        <Link className='link link-tags move-right' to='/products'>Products</Link>
    </>
)
  return (
    <nav className='navbar'>
      <div className={user ? 'user-display' : 'left-side'}>
        {user && <div className="welcome">Welcome, {user.username}</div>}
        <Link to='/'>
        <img className='logo' src={logo} alt="" />
        </Link>
      </div>
      <div className='right-side'>
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </nav>
  )
}

export default Nav
