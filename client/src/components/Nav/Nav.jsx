import React from 'react'
import './Nav.css'
import{Link} from 'react-router-dom'
import logo from '../../photos/background.png'

function Nav() {
  return (
    <nav className='navbar'>
      <div className="left-side">
        <img className='logo' src={logo} alt="" />
      </div>
      <div className='right-side'>
          <Link className='link link-tags move-right' to='/products'>Products</Link>
          <Link className='link link-tags' to='/login'>Login</Link>
          <Link className='link link-tags' to='/'>Sign Up</Link>
      </div>
    </nav>
  )
}

export default Nav
