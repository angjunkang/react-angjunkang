import { useState, useEffect } from "react";
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkNav } from 'react-router-dom'
import Resume from '../../pdfs/ajk-resume.pdf'

const Navigation = ({ isMainPage }) => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const position = window.pageYOffset;
        setScroll(position);

        window.addEventListener("scroll", () => {
            if (isMainPage) {
                setScroll(window.scrollY > 10);
            } else {
                setScroll(window.scrollY > 285);
            }
        });
        // eslint-disable-next-line
    }, []);

    return (
        <nav id="navbar" className={`navbar navbar-light darken-4 fixed-top ${scroll ? 'navbar-collapse' : ''}`}>
            <NavigationLeft isMainPage={isMainPage} scroll={scroll}/>
            <div id="nav-container-right">
                <NavigationItems isMainPage={isMainPage} scroll={scroll}/>
            </div>
        </nav>
    )
}

const NavigationLeft = ({ isMainPage, scroll }) => {
    if (isMainPage || scroll) {
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

const NavigationItems = ({ isMainPage, scroll }) => {
    if (isMainPage || scroll) {
        return (
            <>
                <ul className="text-uppercase" id="nav-items">
                    <li className="nav-item active-nav-item "><LinkScroll to="projects-div" spy={true} smooth={true}><a className="nav-link active-nav-link" href="#/">Portfolio</a></LinkScroll></li>
                    <li className="nav-item"><a className="nav-link" href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
                    <li className="nav-item"><LinkNav to="/about"><a className="nav-link" href="#/">About Me</a></LinkNav></li>
                    <li className="nav-item"><LinkScroll to="footer-div" spy={true} smooth={true}><a className="nav-link" href="#/">Contact</a></LinkScroll></li>
                </ul>
            </>
        )
    } else {
        return (
            <>
                <ul className="text-uppercase" id="nav-items">
                    <li className="nav-item"><LinkNav to="/" spy={true} smooth={true}><a className="nav-link white-text" href="#/">Portfolio</a></LinkNav></li>
                    <li className="nav-item"><a className="nav-link white-text" href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
                    <li className="nav-item active-nav-item"><LinkScroll to="/about"><a className="nav-link active-nav-link white-text" href="#/">About Me</a></LinkScroll></li>
                    <li className="nav-item"><LinkScroll to="footer-div" spy={true} smooth={true}><a className="nav-link white-text" href="#/">Contact</a></LinkScroll></li>

                </ul>
            </>
        )
    }
}

export default Navigation
