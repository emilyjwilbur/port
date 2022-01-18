import React from "react";
import styled from "styled-components";
import {MdPlace} from 'react-icons/md';

const ItemStyles = styled.div`
padding:2rem;
display: flex;
align-items: center;
.icon{
    color: #e07341;
    padding: 1.3rem;
    align-items:center;
    font-size: 20px;

    
}
svg{
    width:1.5rem;
    margin-top:-1rem;
    
}
`;

export default function ContactInfoItem({
    icon = <MdPlace />,
    text = "this is an info"
}){
    return(
        <ItemStyles>
             <div className="icon">{icon}</div>
            <div className="info">
                <p>{text}</p>
            </div>
        </ItemStyles>
    )
}