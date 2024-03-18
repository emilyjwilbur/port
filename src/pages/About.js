import React from "react";
import PText from "../components/PText";

import styled from "styled-components";

import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  
    span {
      background-color: gray;
      color:white;
      padding: .5rem;
      border-radius: 3px;
      margin:10px;
    }
  }
  .about_heading {
    font-size: 3rem;
    margin-bottom: 3rem;
 
  }
  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about_info_items{
    margin-top:10rem;
   
}
.about_info_item{
    margin-top:10rem;
}
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about_subheading">
              I'm Emily.
              </p>
            <h2 className="about_heading">
              A Freelance Web Developer & Designer
            </h2>
            <div className="about_info">
              <PText>
                I'm a Freelance Web Developer from Atlanta, GA, passionate
                about developing and designing web applications that are easy to use and
                appealing to the public. <br /> <br />
                I believe quality design is rooted in both simplicity and
                elegance; therefore, I build and contribute to applications that
                are simple, yet effective, and put user interface first. I
                earned a certificate in Full Stack Web Development from the
                Georgia Institute of Technology to add technical expertise
                alongside my Bachelor of Science in Journalism & Mass
                Communication from Kent State University. <br /> <br />I have
                demonstrated skills in JavaScript, CSS, HTML, ReactJS,
                responsive web design, NodeJS, jQuery, Bootstrap and a variety
                of other technologies that help to conquer both my own
                challenges and others.
              </PText>
            </div>
           
          </div>
          <div className="right"></div>
        </div>
        <div className="about_info_items">
            <div className="about_info_item">
                
                <AboutInfoItem 
                title="Education"
                items={[
                    'Kent State University | BS in Journalism & Mass Communication',
                    'Georgia Institute of Technology | Certificate in Full-Stack Web Development'
                ]}

                />
            </div>

            <div className="about_info_item"> 
                <AboutInfoItem 
                title="FrontEnd"
                items={[
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'jQuery',
                    'React',
                ]}

                />
            </div>

            <div className="about_info_item"> 
                <AboutInfoItem 
                title="BackEnd"
                items={[
                    'Node',
                    'Express',
                    'MongoDB',
                    'MySql',
                    'Firebase'
                ]}

                />
            </div>

            <div className="about_info_item"> 
                <AboutInfoItem 
                title="Design"
                items={[
                    'Photoshop',
                    'Figma',
                    'InDesign',
                    'Illustrator',
                    
                ]}

                />
            </div>


            </div>

        </div>
    <ContactBanner />
    </AboutPageStyles>
  );
}