import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_title'>
        <h1><Link to='/'>e-commerce</Link></h1>
      </div>
      <div>
        <ul className='navbar_list'>
            <li className='navbar_item'><Link to={'/login'}><i class='bx bxs-user-account'></i></Link></li>
            <li className='navbar_item'><Link to={'/purchases'}><i class='bx bx-money-withdraw'></i></Link></li>
            <li className='navbar_item'><Link to={'/cart'}><i class='bx bx-cart'></i></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;