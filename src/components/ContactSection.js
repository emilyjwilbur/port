import React from 'react';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import { MdEmail, MdLocalPhone } from "react-icons/md";
import styled from 'styled-components';

const ContactSectionStyles = styled.div `
padding: 10rem 0;
.contactSection_wrapper{
    display:flex;
    gap: 2rem;
    margin-top: 5rem;
    justify-content: space-between;
    position: relative;
}

.p-contact{
    font-weight:400;
}
.contactHead{
    color:#e07341;
    font-size: 60px;
    display:flex;
    margin-bottom:15px;
}
.contactSection_wrapper::after{
    position:absolute;
    content:'';
    width: 2px;
    height: 50%;
    background-color: gray;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
}
.left{
    width: 100%;
    max-width: 500px;
}
.right{
    max-width: 500px;
    width: 100%;
}
@media only screen and (max-width: 768px) {
    .contactSection_wrapper{
        flex-direction: column;
    }
    .contactSection_wrapper::after{
        display: none;
    }
    .left,
    .right{
        max-width: 100%;
    }
    .right{
        padding: 4rem 2rem 2rem 2rem;
    }
}
`;


export default function ContactSection(){
    return(
        <>
        <ContactSectionStyles>
            <div className="container">
               <p className='p-contact'>contact</p>
                <h2 className='contactHead'>I'm here to help you level up.</h2>
                
              
                <div className="contactSection_wrapper">
                    <div className="left">
                    
                        <ContactInfoItem icon={<MdLocalPhone />} text="770.286.1039" />
                        <ContactInfoItem icon={<MdEmail />} text="ewilbur94@gmail.com" />
                        <ContactInfoItem text="Atlanta, GA" />
                    </div>
                    <div className="right">
                        <ContactForm />
                       
                    </div>
                </div>

            </div>
        </ContactSectionStyles>
        </>
    )
}