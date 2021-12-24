import { useState, useEffect } from "react";
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkNav } from 'react-router-dom'
import Resume from '../../pdfs/angjunkang-resume.pdf'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
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
        const position = window.pageYOffset;
        setScroll(position);

        window.addEventListener("scroll", () => {
            if (isMainPage || width < 905) {
                setScroll(window.scrollY > 10);
            } else {
                setScroll(window.scrollY > 285);
            }
        });
        return () => {
            setScroll({});
        };
        // eslint-disable-next-line
    }, []);

    return (
        <nav id="navbar" className={`navbar navbar-light darken-4 fixed-top ${scroll ? 'navbar-collapse' : ''}`}>
            <NavigationLeft isMainPage={isMainPage} scroll={scroll} width={width} />
            <div id="nav-container-right">
                <NavigationItems isMainPage={isMainPage} scroll={scroll} width={width} />
            </div>
        </nav>
    )
}

const NavigationLeft = ({ isMainPage, scroll, width }) => {
    if (isMainPage || scroll || width < 905) {
        return (
            <div id="title-irminrics" className="navbar-brand">
                <div className="icon irminrics-dp" />JUN KANG
            </div>
        )
    } else {
        return (
            <div id="title-irminrics" className="navbar-brand white-text">
                <div className="icon irminrics-dp" />JUN KANG
            </div>
        )
    }
}

const NavigationItems = ({ isMainPage, scroll, width }) => {
    if (isMainPage) {
        return (
            <>
                <ul className="text-uppercase" id="nav-items">
                    <li id="portfolio-nav" className="nav-item active-nav-item "><LinkScroll to="projects-div" spy={true} smooth={true} className="nav-link active-nav-link">Portfolio</LinkScroll></li>
                    <li id="about-nav" className="nav-item"><LinkNav to="/about" className="nav-link">About</LinkNav></li>
                    <li id="contact-nav" className="nav-item"><LinkScroll to="footer-div" spy={true} smooth={true} className="nav-link">Contact</LinkScroll></li>
                    <li id="resume-nav" className="nav-item"><a className="nav-link" href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
                </ul>
            </>
        )
    } else if (scroll || width < 905) {
        return (
            <>
                <ul className="text-uppercase" id="nav-items">
                    <li id="portfolio-nav" className="nav-item"><LinkNav to="/" className="nav-link">Portfolio</LinkNav></li>
                    <li id="about-nav" className="nav-item active-nav-item"><LinkScroll to="about-div" spy={true} smooth={true} className="nav-link active-nav-link">About</LinkScroll></li>
                    <li id="contact-nav" className="nav-item"><LinkScroll to="footer-div" spy={true} smooth={true} className="nav-link">Contact</LinkScroll></li>
                    <li id="resume-nav" className="nav-item"><a className="nav-link" href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
                </ul>
            </>
        )
    }
    else {
        return (
            <>
                <ul className="text-uppercase" id="nav-items">
                    <li id="portfolio-nav" className="nav-item"><LinkNav to="/" className="nav-link white-text">Portfolio</LinkNav></li>
                    <li id="about-nav" className="nav-item active-nav-item"><LinkScroll to="about-div" spy={true} smooth={true} className="nav-link active-nav-link white-text">About</LinkScroll></li>
                    <li id="contact-nav" className="nav-item"><LinkScroll to="footer-div" spy={true} smooth={true} className="nav-link white-text">Contact</LinkScroll></li>
                    <li id="resume-nav" className="nav-item"><a className="nav-link white-text" href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
                </ul>
            </>
        )
    }
}

export default Navigation
