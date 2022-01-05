import React from 'react'
import './Nav.css'
import{Link} from 'react-router-dom'
import {useState} from 'react'
import logo from '../../photos/background.png'
import hamburger from '../../photos/hamburger.png'

const Nav = ({user}) => {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(prevToggle => !prevToggle)
  }

  const authenticatedOptions = (
    <>
        <Link onClick={handleClick} className="link link-tags" to="/add-product">Add Product</Link>
        <Link onClick={handleClick} className="link link-tags" to="/sign-out">Sign Out</Link>
    </>
  )
  const unauthenticatedOptions = (
    <>
        <Link onClick={handleClick} className='link link-tags' to='/sign-in'>Sign In</Link>
        <Link onClick={handleClick} className='link link-tags' to='/sign-up'>Sign Up</Link>
    </>
  )
  const alwaysOptions = (
    <>
        <Link onClick={handleClick} className='link link-tags move-right' to='/products'>Products</Link>
    </>
  )

  return (
    <div>
    <nav className='navbar'>
      <div className={user ? 'user-display' : 'left-side'}>
      {user && <div className="welcome">Welcome, {user.username}</div>}
        <Link to='/'>
        <img className='logo' src={logo} alt="" />
        </Link>
      </div>
      <div className='right-side'>
      <div className='fullscreen-links-div'>
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
        <button onClick={handleClick} className='hamburger-menu'><img src={hamburger} alt="" /></button>
        <div className='hamburger-links-div' style={{ display: toggle === false ? 'none': 'block'}}>
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div> 
    </nav>
    </div>
  )
}

export default Nav
