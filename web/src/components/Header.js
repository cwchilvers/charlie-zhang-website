import React from 'react';

const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <h1 onClick={() => scrollToSection('home')}>CHARLIE ZHANG</h1>
            <nav>
                <a onClick={() => scrollToSection('about')}>ABOUT</a>
                <a>UPCOMING</a>
            </nav>
        </header>
    );
};

export default Header;