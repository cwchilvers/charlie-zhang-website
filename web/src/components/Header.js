import React from 'react';

import Overlay from './Overlay';

const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <header>
                <div className='logo'>
                    <h1 onClick={() => scrollToSection('home')}>CHARLIE ZHANG</h1>
                    <h2>Pianist & Instructor</h2>
                </div>
                <div className='divider'></div>
                <nav>
                    <div>
                        <a onClick={() => scrollToSection('about')}>
                            ABOUT
                            <div className='underline'></div>
                        </a>
                    </div>
                    <div>
                        <a>EVENTS
                            <div className='underline'></div>
                        </a>
                    </div>
                    <div>
                        <a>MEDIA
                            <div className='underline'></div>
                        </a>
                    </div>
                    <div>
                        <a>CONTACT
                            <div className='underline'></div>
                        </a>
                    </div>
                </nav>
                <div className='underline-header'></div>
            </header>
            <Overlay />
        </div>
    );
};

export default Header;