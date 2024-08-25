import React from 'react'
import './footer.css'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import frame from '../../assets/frame.png';

const Footer = () => {
  return (
    <div id='footer-maindiv'>
      <div id='footer-top-section'>
        <div id='footer-top-section-1'>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div>
            <input type="text" placeholder='Enter Your E-mail' />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div id='footer-top-section-2'>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <div>
            <img src="https://imgs.search.brave.com/9QFqNtj_ifV2S0pGKDlzYqU7LuSviZESdpp-84AaYSw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E5L0ZsYWdfb2Zf/dGhlX1VuaXRlZF9T/dGF0ZXNfKERvU19F/Q0FfQ29sb3JfU3Rh/bmRhcmQpLnN2Zw" alt="" />
            <h3>USD</h3>
          </div>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <div id='footer-middle-section'></div>

      <div id='footer-bottom-section'>
        <div id='footer-bottom-section-1'>
          <div>

            <h2>mettā muse</h2>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div>
            <h2>QUICK LINKS</h2>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

        </div>

        <div id='footer-bottom-section-2'>
          <h2>CONTACT US</h2>
          <div id='social-media-icons'>
            <FaLinkedin className='social-icons' />
            <FaInstagram className='social-icons' />
          </div>
          <h2>mettā muse Accepts</h2>
          <img src={frame} alt="" />
        </div>
      </div>
      <div id='sub-footer'>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer