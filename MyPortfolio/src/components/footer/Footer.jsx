import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__container container">
            <h1 className="footer__title"></h1>
            <ul className="footer__list">
                <li>
                    <a href="#about"
                    className=" footer__link">About</a>
                </li>

                <li>
                    <a href="#project"
                    className=" footer__link">Project</a>
                </li>

                <li>
                    <a href="#contact"
                    className=" footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/" 
                    className="footer__social-link" 
                    target='_blank'
                >
                    <i className='bx bxl-facebook'></i>
                </a>

                <a href="https://www.instagram.com/" 
                    className="footer__social-link" 
                    target='_blank'
                    >
                <i className='bx bxl-instagram'></i>
                </a>

                <a href="https://twitter.com/" 
                    className="footer__social-link" 
                    target='_blank'
                    >
                <i className='bx bxl-twitter'></i>
                 </a>
            </div>
            <span className="footer__copy">
                &#169; karamveer singh. All rigths reserved

            </span>
        </div>
    </div>
  )
}

export default Footer