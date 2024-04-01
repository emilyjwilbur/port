import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../assets/images/noods.png';
import Img2 from '../assets/images/myrtle.png';
import Img3 from '../assets/images/autumn.png';
import Img4 from '../assets/images/bullington.png';
import Img5 from '../assets/images/TopFit.jpg';
import Img6 from '../assets/images/LGMRI.png';
import Img7 from '../assets/images/Sages.jpg';
import Img8 from '../assets/images/telecom.png';
import Img9 from '../assets/images/alert.jpg';
import Img10 from '../assets/images/rarebreed.png';
import Img11 from '../assets/images/Gino.jpg';
import Img12 from '../assets/images/CI.jpg';
import Img13 from '../assets/images/Meditation.jpg';

function GalleryItem({ item, openModel }) {
    return (
        <div className='pics' onMouseEnter={() => openModel(item.imgSrc)}>
            <img src={item.imgSrc} alt='photos' className="slide-image" />
        </div>
    );
}

export default function Gallery() {
    const slides = [
        { id: 12, imgSrc: Img12 },
        { id: 11, imgSrc: Img11 },
        { id: 10, imgSrc: Img10 },
        { id: 13, imgSrc: Img13 },
        { id: 9, imgSrc: Img9 },
        { id: 5, imgSrc: Img5 },
        { id: 8, imgSrc: Img8 },
        { id: 6, imgSrc: Img6 },
        { id: 7, imgSrc: Img7 },
        { id: 1, imgSrc: Img1 },
        { id: 2, imgSrc: Img2 },
        { id: 3, imgSrc: Img3 },
        { id: 4, imgSrc: Img4 },
      
      
    ];

    const [tempimgSrc, setTempImgSrc] = useState('');

    const openModel = (imgSrc) => {
        setTempImgSrc(imgSrc);
    };

    const handleCloseModel = () => {
        setTempImgSrc('');
    };

    return (
        <div style={{ maxHeight: '100vh', overflow: 'hidden' }}>
            {tempimgSrc && (
                <div className="model">
                    <img src={tempimgSrc} alt='img' />
                   
                </div>
            )}

            <Carousel
                animation="fade"
                navButtonsAlwaysVisible
                autoPlay={true}
                interval={4000} // Transition every 3 seconds
                indicators={false}
                timeout={500}
                swipe={true}
                stopAutoPlayOnHover={false} // Disable pausing on hover
                navButtonsProps={{
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderRadius: '50%',
                        padding: '5px'
                    }
                }}
                className="carousel fadel"
            >
                {slides.map((item, index) => (
                    <GalleryItem key={index} item={item} openModel={openModel} />
                ))}
            </Carousel>
        </div>
    );
}
