import React from "react";
import styled from "styled-components";
import ContactButton from "./ContactButton";



const ContactBannerStyles = styled.div`

padding: 10rem 0;

.banner-text{
    font-size:20px;
    text-align:center;
    justify-content:center;
    
}
.you{
    color:#5f51d5;
    font-size:30px;
    text-align:center;
    justify-content:center;
}
.contactBanner_wrapper{
    background-color: #ececec;
    padding: 3rem 1rem;
    text-align:center;
    border-radius: 24px;
margin-bottom: -30px;
    
}
.bannerBtn{
    color:white;
    background-color:#e07341;
    padding:10px;
    justify-content: center;
    margin: 0 auto;
    border-radius: 12px;
    font-weight: 500;
}
.bannerBtn:hover{
    background-color:gray;
    border: none;
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
                    Let me help <span className="you">you</span>.
                </h3>
                <ContactButton btnText="Contact Me" btnLink="/contact" />
            </div>
        </div>
    </ContactBannerStyles>
    )
}