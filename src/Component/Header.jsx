import React from 'react'
import ContentImg from '../assets/Images/header1.jpg'

const Header = () => {
  return (
    <table>
      <thead>
    <tr className="header_sec">
    <td id="logo">
    <img src="src/assets/images/logo-dark.png"  className="img-fluid" alt="logo" />
    </td>
    <td id="header_menu">
    <h6>HOME</h6>
    <h6>ABOUT US</h6>
    <h6>FEATURES</h6>
    <h6>CONTACT</h6></td>
    </tr>
    </thead>
    <tbody>
       <tr>
        <td>
        <div className="image-container">
        <img src={ContentImg} alt="content-image" className="img-fluid" />
        <div className="overlay-text">
          <h6>You only have to know one thing.</h6>
          <h3>You Can Learn Anything</h3>
          <button>Learn More</button>
        </div>
        </div>
        </td>
       </tr>
    </tbody>
    </table>
    )
}

export default Header