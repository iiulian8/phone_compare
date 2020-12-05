import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {

  return (
    <footer>
      <div className='box links'>
        <h2>Useful Links</h2>
        <NavLink activeClassName='active' to={'/Comparison'}>
          Compare Phones
          </NavLink>
        <a href='#'>Terms and Conditions</a>
        <a href='#'>Privacy Policy</a>
        <NavLink activeClassName='active' to={'/About'}>About</NavLink>
        <NavLink activeClassName='active' to={'/Contact'}>Contact</NavLink>
      </div>

      <div className='box social'>
        <h2>Follow Us On Social Media</h2>
        <a href='#' className='fa fa-facebook'></a>
        <a href='#' className='fa fa-twitter'></a>
        <a href='#' className='fa fa-youtube'></a>
        <a href='#' className='fa fa-instagram'></a>
        <hr className='hr'></hr>
        <p id='copyright'>&copy; 2020 PHONECOMPARE.COM</p>
      </div>

      <div className='box subscribe'>
        <h2>Subscribe To Get The Best Deals</h2>
        <form action='subscription.php' method='post'>
          <input
            type='email'
            required
            placeholder='Your email here...'
          ></input>
          <button type='submit' value='submit'>
            Subscribe
            </button>
        </form>
      </div>
    </footer>
  )
}

export default Footer;