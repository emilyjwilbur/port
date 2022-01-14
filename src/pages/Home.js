import React from 'react';
import Footer from '../components/Footer.js';
import Gallery from '../components/Gallery.js';
import HeroSection from '../components/HeroSection.js'

import SkillSectionHome from '../components/SkillSectionHome.js';



export default function Home(){
    return (
        <div>
            
            <HeroSection />
            <SkillSectionHome />
            <Gallery />
            
            
        </div>
    )
}