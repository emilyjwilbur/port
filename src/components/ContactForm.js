import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';


const Result = () => {
    return(
        <p>Your message has been successfully sent! I will contact you shortly.</p>
    )
}

const FormStyles = styled.form `
width:100%;

.form-group{
    width:100%;
    margin-bottom:1rem;
  
 
    
}
label{
    font-size: 18px;
    background-color:white;
   
  
}
input,
textarea{
    width:100%;
    font-size:18px;
    padding:1rem;
    color:black;
    background-color: #fafafa;
    border:solid #dedede 1px;
    border-radius:0px;
    margin-top:.5rem;
    
}
textarea{
    min-height:250px;
    resize:vertical;
   
}
button[type="submit"]{
    background-color: gray;
    color: white;
    background-color:#e07341;
    font-weight:400;
    font-size: 15px;
    display: inline block;
    outline:none;
    border: none;
    padding: .8rem 3rem;
    border-radius: 8px;
    cursor: pointer;
}
.row {
    font-size: 15px;
    margin-top: 2rem;
    
}
`;


export default function ContactForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wi7rwa3', "template_4f8f8zj", e.target, "user_vbmgv87plXhaZrOGi4JR3")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
        showResult(true);
    }

    return(
        <>
          <FormStyles onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="name">First & Last Name
                        <input type="text" id="name" name="name" value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email
                        <input type="text" id="email" name="email" value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Phone Number
                        <input type="text" id="phone" name="phone" value={phone}
                        onChange={e => setPhone(e.target.value)}
                        />
                    </label>
                </div>

               

                <div className="form-group">
                    <label htmlFor="message">Your Message
                        <textarea type="message" id="message" name="message" value={message}
                        onChange={e => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <button type='submit' value="send">Send</button>
                <div className='row'>{result ? <Result/> : null}</div>
            </FormStyles>
        </>
    )
}