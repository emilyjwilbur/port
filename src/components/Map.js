import React from "react";
import styled from "styled-components";
import atlImg from '../assets/images/atl.png';

const MapStyles = styled.div`
background: url(${atlImg}) no-repeat center / cover;
min-height: 400px;
margin-top:-50px;
.container {
    position: relative;
    min-height: 400px;
    
}
.map_card{
    position: absolute;
    right: 27%;
    bottom: 10%;
    padding: 2rem;
    background: black;
    width: 100%;
    max-width:300px;
    border-radius: 12px;
    
}
.map_card_heading{
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color:white;
   
}
.location{
    color:white;
    font-size:1rem;
    margin-bottom:-10px;
}
.map_card_link{
    display: inline-block;
    font-size: 1rem;
    margin-top: 3rem;
    text-decoration: underline;
    color:white

}
@media only screen and (max-width: 768px) {
    background-position: 60% center;
    .map_card{
        right:10px;
    }
    .map_card_heading{
        font-size: 1rem;
        margin-bottom: .5rem;
        color:white;
    }
    .location{
        color:white;
        font-size:.85rem;
        margin-bottom:-10px;
    }
    .map_card_link{
        display: inline-block;
        font-size: .85rem;
        margin-top: 2rem;
        text-decoration: underline;
        color:white
    
    }
}
@media only screen and (max-width: 400px) {
    .map_card{
        max-width:none;
        right:10px;
    }
    
}
`;

export default function Map() {
    return(
        <MapStyles>
            <div className="container">
                <div className="map_card">
                    <h3 className="map_card_heading">
                        I am here!
                    </h3>
                    <h3 className="location">Reynoldstown, Atlanta, GA</h3>
                    <a href="https://goo.gl/maps/LZwLf7HhETVA2V6D7" target="_blank" rel="noreferrer" className="map_card_link">Open in Google Maps</a>
                </div>
            </div>
        </MapStyles>
    )
}