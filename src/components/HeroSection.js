import React, {useRef, useEffect, useState} from "react";
import headshot from '../assets/images/headshot.png';
import {HiArrowNarrowRight} from 'react-icons/hi';
import SocialMediaArrow from '../assets/images/arrow.png';

import { ToastContainer , Toast} from "react-bootstrap";




export default function HeroSection(){
  
const [show, setShow] = useState(true);

function useOutsideAlerter(ref){
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)){
                setShow(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        };
    }, [ref]);
}

const wrapperRef = useRef(null);
useOutsideAlerter(wrapperRef);
    return(
        <div className="hero">




<div className="message">
<ToastContainer>
  <Toast onClose={() => setShow(false)}
  data-testid="toast"
  show={show}
  delay={20000}
  autohide
  ref={wrapperRef}
  >
    <Toast.Header closeButton={false}>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <strong className="me-auto">Bootstrap</strong>
      <small className="text-muted">just now</small>
    </Toast.Header>
    <Toast.Body>See? Just like this.</Toast.Body>
  </Toast>
  <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <strong className="me-auto">Emily</strong>
      <small className="text-muted">2 seconds ago</small>
    </Toast.Header>
    <Toast.Body>I'm glad you're here!</Toast.Body>
  </Toast>
</ToastContainer>
</div>











            <div className="container">
                <div className="hero-inner">
                    <div className="hero-content">
                       
                        <div className="hero-content-inner">
                            <h1>
                                <div className="hero-content-line">

                                <div className="bounce">
  

                                    <div className="hero-content-line-inner"> <span class="letter">H</span>
                                        <span class="letter">e</span>
                                        <span class="letter">l</span>
                                        <span class="letter">l</span>
                                        <span class="letter">o</span>
                                         </div>
                                    </div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">I'm Emily. </div>
                                </div>
                                
                            </h1>
                           
                            <p>A Web Developer & Designer based out of Atlanta, GA.</p>
                            <div className="btn-row">
                                <button className="about-button">
                                    LEARN MORE
                                    <div className="social-icons">
                                            <HiArrowNarrowRight />
                                    </div>
                                </button>
                            </div>
                        </div>
                   
                    </div>
                    <div className="hero-images">
                        <div className="hero-image-inner">
                            <div className="hero-image">
                                <img className="headshot" alt="headshot" src={headshot}/>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero_scrollDown">
                            <p>Scroll</p>
                            <img src={SocialMediaArrow} alt="" />
                        </div>



       </div>

        
       
       
    )
}