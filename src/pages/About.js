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
      color: white;
      padding: 0.5rem;
      border-radius: 3px;
      margin: 10px;
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
  .about_info_items {
    margin-top: 10rem;
  }
  .about_info_item {
    margin-top: 10rem;
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about_subheading">I'm Emily.</p>
            <h2 className="about_heading">I build things for the web.</h2>
            <div className="about_info">
              <PText>
                As a FrontEnd Web Developer hailing from Atlanta, GA, I'm
                deeply passionate about crafting web applications that
                seamlessly blend usability with aesthetic appeal. <br /> <br />{" "}
                I firmly believe that the essence of great design lies in its
                simplicity and elegance. Thus, my mission is to create
                applications that prioritize user interface while maintaining
                simplicity and effectiveness. Equipped with a certificate in
                Full Stack Web Development from the Georgia Institute of
                Technology and a Bachelor of Science in Journalism & Mass
                Communication from Kent State University, I bring a blend of
                technical expertise and creative insight to every project.
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
                "Kent State University | BS in Journalism & Mass Communication",
                "Georgia Institute of Technology | Certificate in Full-Stack Web Development",
              ]}
            />
          </div>

          <div className="about_info_item">
            <AboutInfoItem
              title="FrontEnd"
              items={["HTML", "CSS", "JavaScript", "jQuery", "React"]}
            />
          </div>

          <div className="about_info_item">
            <AboutInfoItem
              title="BackEnd"
              items={["Node", "Express", "MongoDB", "MySql", "Firebase"]}
            />
          </div>

          <div className="about_info_item">
            <AboutInfoItem
              title="Design"
              items={["Photoshop", "Figma", "InDesign", "Illustrator"]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
