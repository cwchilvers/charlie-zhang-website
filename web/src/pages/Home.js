import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ArrowDown from '../assets/svg/ArrowDown';

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showTitle, setShowTitle] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {    
        // Update the scroll position when the user scrolls
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Add a timeout to set showTitle to true after a few seconds
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTitle(true);
        }, 1000); // Adjust the delay as needed

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timeout);
    }, []);

    // Calculate the parallax effect by adjusting the translateY position
    const parallax = -scrollY * 0.1;

    return (
        <section id='home' className='home'>
            <Hero />
            <div className='content' style={{ transform: `translate3d(0, ${parallax}px, 0)` }}>
                <div onClick={() => scrollToSection('about')}>
                    <h1 className={showTitle ? 'show' : ''}>CHARLIE ZHANG</h1>
                </div>
            </div>
        </section>
    );
};

export default Home;