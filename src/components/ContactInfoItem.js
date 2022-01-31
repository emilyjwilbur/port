import React from "react";
import styled from "styled-components";
import {MdPlace} from 'react-icons/md';

const ItemStyles = styled.div`
padding:1rem;
display: flex;
align-items: center;
p{
    font-size:18px;
    
}
.icon{
    color: black;
    padding: 1rem;
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