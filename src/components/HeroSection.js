import React, {useRef, useEffect} from "react";
import headshot from '../assets/images/headshot.png';
import {HiArrowNarrowRight} from 'react-icons/hi';
import SocialMediaArrow from '../assets/images/arrow.png';




export default function HeroSection(){
    return(
        <div className="hero">


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