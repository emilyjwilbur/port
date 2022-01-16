import React from "react";
import styled from "styled-components";



const ContactBannerStyles = styled.div`

padding: 10rem 0;
.banner-text{
    font-size:20px;
    text-align:center;
    justify-content:center;
    
}
.contactBanner_wrapper{
    background-color: #cecdcd;
    padding: 3rem 1rem;
    text-align:center;
    
margin-bottom: -30px;
    
}
.bannerBtn{
    color:white;
    border: solid black;
    background-color:black;
    padding:10px;
    justify-content: center;
    margin: 0 auto;
}
.contactBanner_heading{
font-size: 30px;
margin-bottom: 1rem;
}
@media only screen and (max-width: 768px) {
    .contactBanner_heading {
        font-size: 1.8rem;
    }
}


`






export default function ContactBanner(){
    return(
        <ContactBannerStyles>
        <div className="container">
            <div className="contactBanner_wrapper">
                <p className="banner-text">
                    Have a project in mind?
                </p>
                <h3 className="contactBanner_heading">
                    Let me help you.
                </h3>
                <button className="bannerBtn" btnLink="/contact">CONTACT</button>
            </div>
        </div>
    </ContactBannerStyles>
    )
}