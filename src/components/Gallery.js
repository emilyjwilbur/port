import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../assets/images/noods.png';
import Img2 from '../assets/images/myrtle.png';
import Img3 from '../assets/images/autumn.png';
import Img4 from '../assets/images/bullington.png';
import Img5 from '../assets/images/topfit.png';
import Img6 from '../assets/images/LGMRI.png';
import Img7 from '../assets/images/sages.png';
import Img8 from '../assets/images/telecom.png';
import Img9 from '../assets/images/alert.jpg';
import Img10 from '../assets/images/rarebreed.gif';



export default function Gallery(){

    let data = [
        {

            id: 10,
            imgSrc: Img10,
        },
        {

            id: 9,
            imgSrc: Img9,
        },
        {

            id: 8,
            imgSrc: Img8,
        },
        {

            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc:Img7,
        },
        {

            id: 1,
            imgSrc: Img1,
        },
        {

            id: 2,
            imgSrc: Img2,
        },
        {

            id: 3,
            imgSrc: Img3,
        },
        {

            id: 4,
            imgSrc: Img4,
        },
        {

            id: 5,
            imgSrc: Img5,
        },
    
     
       
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return(
       <>
      <div className={model? "model open" : "model"}>
        <img src={tempimgSrc} alt='img' />
        <CloseIcon onClick={() => setModel(false)} />
       

    </div>      
    <div className='gallery'>
        {data.map((item, index) =>{
            return(
                <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                    <img src={item.imgSrc} alt='photos' style={{width:'100%'}} />
                </div>
            )
        })}

      </div>
       
       </>
    )

}