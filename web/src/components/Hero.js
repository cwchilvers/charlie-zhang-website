import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

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

    // Calculate the parallax effect by adjusting the translateY position
    const parallax = -scrollY * 0.3;

    return (
        <div className='hero'>
            <div className='background' style={{ transform: `translate3d(0, ${parallax}px, 0)` }}></div>
        </div>
    );
}

export default Hero;