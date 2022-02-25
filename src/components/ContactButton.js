import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContactButtonStyle = styled.div`

margin-top: 2rem;
.button {
    font-size: 1.5rem;
    background-color: black ;
    padding: 0.5em 1.5em;
    border-radius: 8px;
    display: inline-block;
    border:solid black 2px;
    color: white;
    transition-property: background-color;
    transition-duration: 1s;
    text-decoration:none;
   
}
.button:hover {
  background-color: #777777;
  color:white;


  
  
}
@media only screen and (max-width: 768px) {
    .button {
        font-size; 1rem
        
    }
}

`




export default function ContactButton ({btnLink = 'test', btnText = 'test', outline = false }) {
    return (
        <ContactButtonStyle outline={outline} className="button-wrapper">
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      </ContactButtonStyle>
      
    );
}