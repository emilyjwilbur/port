import React, { useRef, useEffect, useState } from "react";
import headshot from "../assets/images/headshot.png";
import SocialMediaArrow from "../assets/images/arrow.png";
import LearnButton from "./LearnMoreButton";

import { ToastContainer, Toast } from "react-bootstrap";

export default function HeroSection() {
  const [show, setShow] = useState(true);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <>

<div className="message">
          <ToastContainer>
           
            <Toast  onClose={() => setShow(false)}
              data-testid="toast"
              show={show}
              delay={20000}

              ref={wrapperRef}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Emily</strong>
                <small className="text-muted">2 seconds ago</small>
              </Toast.Header>
              <Toast.Body>I'm glad you're here!</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      <div className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-content-inner">
                <h1>
                  <div className="hero-content-line">
                    <div className="bounce">
                      <div className="hero-content-line-inner">
                        {" "}
                        
                        <span class="letter">P</span>
                        <span class="letter">R</span>
                        <span class="letter">O</span>
                        <span class="letter">D</span>
                        <span class="letter">U</span>
                        <span class="letter">C</span>
                        <span class="letter">T</span>
                        <span class="letter">S</span>
                      </div>
                    </div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner ">I'm Emily. </div>
                  </div>
                </h1>

                <p className="subtitle-hero">A frontend web developer based out of Atlanta, GA.</p>
                <div className="btn-row">
                  <button className="about-button" >
                    LEARN MORE
                    {/* <div className="social-icons">
                      <HiArrowNarrowRight />
                    </div> */}
                     <LearnButton btnText=">" btnLink="/about"/>
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-images">
              <div className="hero-image-inner">
                <div className="hero-image">
                  <img className="headshot" alt="headshot" src={headshot} />
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
    </>
  );
}
