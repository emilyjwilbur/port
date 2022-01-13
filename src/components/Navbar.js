import React, {useState} from "react";
import { Navbar } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [showNav, SetShowNav] = useState(false);
  return (
  
    
      <>
        <Navbar fixed="top" bg="light" variant="light">
          <a href="/">
          <img className="logo" alt="logo" src={logo}></img>
          </a>
        
         
         <li>
           <NavLink
           to='/about'
           role='button'>
            About
           </NavLink>
         </li>
         <li>
           <NavLink
           to='/projects'
           role='button'
           >
             Projects
           </NavLink>
         </li>
         <li>
           <NavLink
           to='/contact'
           role='button'
           >
             Contact
           </NavLink>
         </li>
        </Navbar>
      </>
  
  );
}
