import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
            <div className = "container">
                <span>Contact:</span>
                <div>
                    <FaEnvelope />
                    Our Email: 
                    <a href="mailto: shophere@gmail.com" rel="noopener noreferrer" target = "_blank">
                        traveltheglobe@gmail.com
                    </a>
                </div>
                <div>
                    <FaPhoneAlt />
                    Phone number: +381 65 57 30 724
                </div>
                <div>
                    <FaFacebookSquare />
                    Facebook: 
                    <a href = "https://www.facebook.com/veselin.roganovic" rel="noopener noreferrer" target = "_blank">
                        Travel The Globe
                    </a>
                </div>
                <div>
                    <FaInstagramSquare />
                    Instagram: 
                    <a href="https://www.instagram.com/veselin_roganovic/" rel="noopener noreferrer" target = "_blank">
                        @traveltheglobe
                    </a>
                </div>
                <div>
                    Travel the globe with us! ~ Made by Rogan003
                </div>
            </div>
        </footer>
  )
}

export default Footer
