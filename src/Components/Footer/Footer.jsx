import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>TrendStore</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
<div className="footer-icons-container">
<img src={instagram_icon} alt="" />
</div>
<div className="footer-icons-container">
<img src={pintrest_icon} alt="" />
</div>
<div className="footer-icons-container">
<img src={whatsapp_icon} alt="" />
</div>
      </div>
      <div className="footer-copyrigth">
        <hr/>
        <p>Copyrigth @ 2024 - All rigths reserved</p>
      </div>
    </div>
  )
}

export default Footer
