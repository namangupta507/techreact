import React from 'react'
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                <div className='left-box'>
                  
                        <div className='vt-footer_left'>
                            <div className='vt-icon_box'>
                        <div className='icon_box'>
                        <FaPiggyBank />
                        </div>
                    </div>
                       
                       
                        <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                    </div>
                   

                   
                    <div className='vt-footer_left'>
                        <div className='vt-icon_box'>
                        <div className='icon_box'>
                        <FaShippingFast />
                        </div>
                    </div>
                       
                     
                        <div className='detail'>
                        <h3>free delivery</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                        </div>
                 

                        <div className='vt-footer_left'>
                        <div className='vt-icon_box'>
                        <div className='icon_box'>
                        <FaHeadphonesAlt />
                        </div>
                    </div>
                       
                       
                        <div className='detail'>
                        <h3>24X7 support</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                        </div>
                        <div className='vt-footer_left'>
                        <div className='vt-icon_box'>
                        <div className='icon_box'>
                        <FaHeadphonesAlt />
                        </div>
                    </div>
                       
                        <div className='detail'>
                        <h3>24X7 support</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                        </div>
                        <div className='vt-footer_left'>
                        <div className='vt-icon_box'>
                        <div className='icon_box'>
                        <FaWallet />
                    </div>
                    </div>
                      
                        <div className='detail'>
                        <h3>money back</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                        </div>
                    </div>
              
                  
             
            
            </div>
               
                <div className='col-md-8'>   
                <div className='right_box'>
                <div className='header'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='footer-logo'>
                        <img src='image/tg.png' alt=''></img>
                        </div>
                        </div>
                    </div>
                   
                    <p>Lorem ipsum dolor sit amet, consectetur Nuliscing elit. Duis faucibus ipsum id sem Putconsequat Text.</p>
                </div>
                <div className='bottom'>
                    <div className='row'>
                        <div className='col-md-4'>
                        <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>sales</li>
                        </ul>
                    </div>
                        </div>
                        <div className='col-md-4'>
                        <div className='box'>
                        <h3>products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Oder</li>
                            <li>New product</li>
                            <li>old product</li>
                        </ul>
                    </div>
                        </div>
                        <div className='col-md-4'>
                        <div className='box'>
                        <h3>contact us</h3>
                        <ul>
                            <li>Lorem Ipsum is that it has a more-or-less normal
                            </li>
                            <li>+(012)98989898</li>
                            <li>abc@gmail.com</li>
                        </ul>
                    </div>
                        </div>
                    </div>
                  
                   
                 
                </div>
            </div>
            </div>
            </div>
            </div>
           
         
            </div>
    </>
  )
}

export default Footer