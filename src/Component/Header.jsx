import React from 'react'
import ContentImg from '../assets/Images/header1.jpg'

const Header = () => {
  return (
    <table>
      <thead>
    <tr className="header_sec">
    <td id="logo">
    <img src="src/assets/images/logo-dark.png" alt="logo" />
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
        <td><img src={ContentImg}/></td>
       </tr>
    </tbody>
    </table>
    )
}

export default Header