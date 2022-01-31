import React from 'react';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import { MdEmail, MdLocalPhone } from "react-icons/md";
import styled from 'styled-components';



const ContactSectionStyles = styled.div `
padding: 10rem 0;



.contactSection_wrapper{
    display:flex;
    justify-content: space-between;
    flex-direction:column;
}

.p-contact{
    font-weight:900;
    font-size: 45px;
    justify-content:center;
    margin-bottom: 50px;
}
.contactHead{
    font-size: 25px;
    font-weight: 400;
    display:flex;
    margin-bottom:20px;
    justify-content:center;
}

.left{
    justify-content: center;
    display: flex;
   
}
.right{
margin-left: 30% ;
}

@media only screen and (max-width: 768px) {
    .contactSection_wrapper{
        flex-direction: column;
        align-items:center;
        margin-bottom: -30px;
       
    }

    .contactHead{
        font-size: 18px;
        font-weight: 300;
        
    }
   
    .left
    {
        flex-direction: column;
      margin-bottom:0
       
    },
    .right{
        margin-left: 10px;
        margin-right: 25px;
        background-image: {}
    }
}
`;


export default function ContactSection(){
    return(
        <>
        
        <ContactSectionStyles>
       
            <div className="container">
               <p className='p-contact'>LET'S CHAT!</p>
                <h3 className='contactHead'>I'm currently open for work and would love to hear from you.</h3>
                {/* <img className='bannerImg'  alt='img' src={Airplane}/> */}
                
              
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