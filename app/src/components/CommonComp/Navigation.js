import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {

  return (
    <nav role='navigation'>
      <a href='/' id='logo'>
        <span>PHONECOMPARE.COM</span>
      </a>
      <input type='checkbox' id='hamburger-check'></input>
      <label htmlFor='hamburger-check' id='hamburger-button'>
        <div className='hamburger-line top'></div>
        <div className='hamburger-line middle'></div>
        <div className='hamburger-line bottom'></div>
      </label>

      <div className='nav-links'>
        <NavLink exact to={'/'}>Home</NavLink>
        <NavLink activeClassName='active' to={'/Comparison'}>
          Compare Phones
          </NavLink>
        <NavLink activeClassName='active' to={'/About'}>About</NavLink>
        <NavLink activeClassName='active' to={'/Contact'}>Contact</NavLink>
        <NavLink activeClassName='active' to={'/Checkout'}><i className="fa fa-shopping-cart" aria-hidden="true"></i></NavLink>
      </div>
    </nav>

  )
}

export default Navigation;