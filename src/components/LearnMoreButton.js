import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LearnButtonStyle = styled.div`

margin-top: 2rem;
.button {
    position: relative;
    margin-bottom:30px;
    margin-left: 15px;
    font-size: .8rem;
    background-color: #5f51d51 ;
    padding: .5em 1em;
    border-radius: 60px;
    display: inline-block;
    border:none;
    color: white;
    transition-property: background-color;
    transition-duration: 1s;
    text-decoration:none;
    font-weight: 700;
    font-size: 18px
   
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




export default function LearnButton ({btnLink = 'test', btnText = 'test', outline = false }) {
    return (
        <LearnButtonStyle outline={outline} className="button-wrapper">
        <Link className="button" to={btnLink}>
          {btnText}
         
        </Link>
      </LearnButtonStyle>
      
    );
}