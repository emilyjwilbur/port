import React from 'react';
import styled from "styled-components";

const AboutItemStyles = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
margin-top: 3rem;
position: relative;



.items {
    display: flex;
    gap:1rem;
    padding: 0rem
    position: absolute;
    left: 0rem;
    
}
.item {
    background-color:#e07341;
    color:white;
    padding:12px;
    border-radius: 8px;
    

}
@media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
        position: initial;
        gap: 1rem;
    }
  
}
`;



export default function SkillSection({
 
  
    items = ["HTML", "CSS", 'JS'],
}){
    return(
        <AboutItemStyles>
      
        <div className="items">
            {items.map((item,index) => (
                <div className="item" key={index}> 
                  <p className='item1'>{item}</p>
                </div> 
            ))}
        </div>
      </AboutItemStyles>
    )
}