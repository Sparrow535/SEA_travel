import React from 'react'
import './Footer.css'
import footerVector from '../../assets/Footer/Vector.svg'
import ActionButton from '../ActionButton/ActionButton'

function Footer() {
  const mapLink = 'https://www.google.com/maps/dir/?api=1&destination=Thimphu%2C+Bhutan'
  const whatsappLink = 'https://wa.me/97517123456'

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
            <ActionButton className='Contact' text="Contact Us" size="lg" theme="secondary" />
          </div>
        </div>
      </div>
      <div className="second"></div>
    </div>
  )
}

export default Footer
