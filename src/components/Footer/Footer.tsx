import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footerVector from '../../assets/Footer/Vector.svg'
import ActionButton from '../ActionButton/ActionButton'
import locationIcon from '../../assets/Footer/location_icon.svg'
import callIcon from '../../assets/Footer/call_icon.svg'
import mailIcon from '../../assets/Footer/mail_icon.svg'
import copyrightIcon from '../../assets/Footer/copyright.svg'
import ultraIcon from '../../assets/Footer/ultra_icon.svg'

function Footer() {
  const mapLink = 'https://www.google.com/maps/search/?api=1&query=Paro%2C+Bhutan'
  const whatsappLink = 'https://wa.me/97517123456'
  const emailLink = 'mailto:spiritualescapeadventure@gmail.com'
  const aboutLink = '/about'
  const faqLink = '/faq'
  const facebookLink = 'https://www.facebook.com/'
  const instagramLink = 'https://www.instagram.com/'

  return (
    <div className="footer">
      <img className="footer__vector" src={footerVector} alt="" aria-hidden="true" />
      <div className="first">
        <div className="header">
          <div className="eyebrow">Address</div>
          <div className="title">GET IN TOUCH</div>
        </div>
        <div className="boxes">
          <div className="box left">
            <div className="top">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open route in Google Maps"
              >
                <p>
                  CLICK HERE TO GET THE ROUTE <br />
                  TO ME
                </p>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <p>+975 - 17 12 34 56</p>
              </a>
            </div>
            <a
              className="bottom"
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Google Maps"
            >
              VISIT US
            </a>
          </div>
          <div className="box right">
            <p>
              SPEND YOUR <br />
              REST WITH US
            </p>
            <ActionButton className="Contact" text="Contact Us" size="lg" theme="secondary" />
          </div>
        </div>
      </div>
      <div className="second">
        <div className="second__top">
          <div className="list">
            <h2>Booking Plan</h2>
            <div className="links">
              <Link to="/packages/festivals" className="link">
                Festival Tour
              </Link>
              <Link to="/packages/cultural" className="link">
                Cultural Tour
              </Link>
              <Link to="/packages/adventures" className="link">
                Adventure Tour
              </Link>
            </div>
          </div>
          <div className="list">
            <h2>Connect</h2>
            <div className="links">
              <a href={facebookLink} className="link" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={instagramLink} className="link" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href={whatsappLink} className="link" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="list">
            <h2>Company</h2>
            <div className="links">
              <Link to="/about" className="link">
                About Us
              </Link>
              <Link to={faqLink} className="link">
                FAQs
              </Link>
            </div>
          </div>
          <div className="list">
            <h2>Contact Info</h2>
            <div className="links">
              <a href={mapLink} className="link" target="_blank" rel="noopener noreferrer">
                <img src={locationIcon} alt="Location" />
                <span>Paro, Bhutan</span>
              </a>
              <a href={whatsappLink} className="link" target="_blank" rel="noopener noreferrer">
                <img src={callIcon} alt="Call" />
                <span>+975 - 17 12 34 56</span>
              </a>
              <a href={emailLink} className="link">
                <img src={mailIcon} alt="Mail" />
                <span>spiritualescapeadventure@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="second__bottom">
          <div className="left">
            <img src={copyrightIcon} alt="Copyright" />
            <span>All Rights reserved 2026. Spiritual Escape Adventure</span>
          </div>
          <div className="right">
            <span>Developed by</span>
            <img src={ultraIcon} alt="Ultra" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
