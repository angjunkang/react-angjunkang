import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkNav } from 'react-router-dom';
import Resume from '../../pdfs/angjunkang-resume.pdf';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const Navigation = ({ isMainPage }) => {
    const [scroll, setScroll] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScroll(position);

            if (isMainPage || width < 905) {
                setScroll(position > 10);
            } else {
                setScroll(position > 285);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMainPage, width]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div id="menu-nav" className={`${scroll ? 'menu-nav-collapse' : ''}`}>
            <nav id="navbar" className={`navbar navbar-light darken-4 fixed-top ${scroll ? 'navbar-collapse' : ''}`}>
                <div id="title-irminrics" className={`navbar-brand ${isMainPage || scroll || width < 905 ? '' : 'white-text'}`} onClick={scrollToTop}>
                    <LinkNav to="/" className={`irminrics-link ${isMainPage || scroll || width < 905 ? '' : 'white-text'}`}>
                        <div className="icon irminrics-dp" />
                    </LinkNav>
                </div>
                <div id="nav-container-right">
                    <NavigationItems isMainPage={isMainPage} scroll={scroll} width={width} />
                </div>
            </nav>
        </div>
    );
};

const NavigationItems = ({ isMainPage, scroll, width }) => {
    const navClass = isMainPage || scroll || width < 905 ? '' : 'white-text';

    return (
        <ul id="nav-items">
            <li id="portfolio-nav" className={`nav-item ${isMainPage ? 'active-nav-item' : ''}`}>
                {isMainPage ?
                    <LinkScroll to="projects-div" spy={true} smooth={true} className={`nav-link ${isMainPage ? 'active-nav-link' : ''} ${navClass}`}>Portfolio</LinkScroll> :
                    <LinkNav to="/" className={`nav-link ${navClass}`}>Portfolio</LinkNav>}
            </li>
            <li id="about-nav" className={`nav-item ${isMainPage ? '' : 'active-nav-item'}`}>
                {isMainPage ?
                    <LinkNav to="/about" className={`nav-link ${navClass}`}>About</LinkNav> :
                    <LinkScroll to="about-div" spy={true} smooth={true} className={`nav-link ${isMainPage ? '' : 'active-nav-link'} ${navClass}`}>About</LinkScroll>}
            </li>
            <li id="contact-nav" className="nav-item">
                <LinkScroll to="footer-div" spy={true} smooth={true} className={`nav-link ${navClass}`}>Contact</LinkScroll>
            </li>
            <li id="resume-nav" className="nav-item">
                <a className={`nav-link ${navClass}`} href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>
            </li>
        </ul>
    );
};

export default Navigation;
