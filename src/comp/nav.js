import React from 'react'
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { CiLogout, CiUser} from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react"
import {Link} from 'react-router-dom';

import './nav.css'
const Nav = ({search, setSearch, searchproduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();


  
  return (
    <>
    <div className='header'>
        <div className='top_header'>
            <div className='icon'>
                <MdLocalShipping />
            </div>
            <div className='info'>
                <p>Free Shipping When Shopping upto $1000</p>
            </div>
        </div>



        <div className='mid_header'>
        <nav className="navbar vt-mid navbar-expand-lg navbar-light">
  <div class="container-fluid">
     <div className='logo'>
            <img src='image/tw.png' alt='logo'></img>
          </div>
<div className="navbar-right">
     <div className='search_box'>
            <input type='text' value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searchproduct}><AiOutlineSearch /></button>
          </div>
{
            isAuthenticated ? 
            // if user is login then Logout Button will shown and also user profile         
            <div className='user'>
              <div className='icon'>
                <CiLogout />
              </div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </div>
            </div>
          :
          // if user is not Login then login button will shown
          <div className='user'>
            <div className='icon'>
              <FiLogIn />
            </div>
            <div className='vt-btn'>
              <button className="vt-inner_button" onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
          }
     
    </div>
  </div>
  
</nav>
        </div>




        <div className='last_header'>
                



        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
     <div className='user_profile'>
              {
                // User Profile Will Shown Here
                isAuthenticated ?
                <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='info'>
                 
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
                </>
                :
                <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='info'>
                  <p>Please Login</p>
                </div>
                </>
              }
            </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon"></span> */}
      <span className='icon-bar'></span>
      <span className='icon-bar'></span>
      <span className='icon-bar'></span>
      
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav vt-navbar me-auto mb-2 mb-lg-0">
         <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/shop' className='link'>Shop</Link></li>
              <li><Link to='/cart' className='link'>Cart</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/contact' className='link'>Contact</Link></li>
              <li> 
                <div className='offer'>
                  <p>flat 10% over all iphone</p>
                </div>
              </li>
              </ul>
      
     
    </div>
  </div>
</nav>
        
         
        </div>
    </div>
    </>
  )
}

export default Nav






