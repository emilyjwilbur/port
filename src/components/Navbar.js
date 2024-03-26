import React, {useState} from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [showNav, SetShowNav] = useState(false);
  return (
  
    
      <>
   
        <Navbar className="justify-content-end" fixed="top" bg="dark" variant="dark">

        <a className="navbar-brand" href="/">
          <img className="logo justify-content-center" alt="logo" src={logo}></img>
          </a>
         <li>
           <NavLink className="navlinks"
           to='/about'
           role='button'>
            About
           </NavLink>
         </li>
         <li >
           <NavLink className="navlinks"
           to='/projects'
           role='button'
           >
             Projects
           </NavLink>
         </li>
         <li>
           <NavLink className="navlinks"
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
