import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectImg from "../assets/images/noods.png";
import Card from 'react-bootstrap';
import Button from 'react-bootstrap';

const ProjectItemStyles = styled.div `
.projectItem_img {
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 0px;
    display: inline-block;
    
    img {
        width: 100%;  
    }
}
.projectItem_info{
    margin-top: .5rem;
    background-color: white;
    padding: 1rem;
    
}
.projectItem_title {
    font-size: 25px;
    color:black;
   
    
}
.projectItem_desc {
    font-size: 18px;
    color:black;
    
}
a {
    font-size: 18px;
   text-decoration: underline;
  color:black;
}
@media only screen and (max-width: 768px) {
    .projectItem_img {
        width: 100%;
     
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        
        img {
            width: 100%;
           
        }
    }
    .projectItem_info{
        margin-top: 1rem;
    }
    .projectItem_desc {
        font-size: 15px;
        color:black;
        
    }
    .projectItem_title {
        font-size: 18px;
        color:black;
       
        
    }
}
`;

export default function ProjectItem({
    img= projectImg,
    title= 'Project Name',
    desc= 'lorem ipson description here',
    link= 'link here',
}) {
    return(
        <ProjectItemStyles>
           <Link to="/projects" className="projectItem_img">
               <img src={img} alt="project img" />
           </Link>
           <div className="projectItem_info">
               <Link to="#">
                   <h3 className="projectItem_title">{title}</h3>
               </Link>
               <p className="projectItem_desc">{desc}</p>
               <a href={link} target='_blank'>View Live</a>
           </div>
        </ProjectItemStyles>






    )
}