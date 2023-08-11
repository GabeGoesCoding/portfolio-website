import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    const shouldScrollToAboutMe = location.search.includes('scrollToAboutMe=true');

    useEffect(() => {
        if (shouldScrollToAboutMe) {
            const aboutMeSection = document.getElementById('aboutMe');
            if (aboutMeSection) {
                aboutMeSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [shouldScrollToAboutMe]);

    return (
        <section className="header">
            <nav>
                <div className="nav-links" id="navLinks">
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><Link to="/home?scrollToAboutMe=true">About Me</Link></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}
