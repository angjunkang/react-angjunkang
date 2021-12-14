import { useState, useEffect } from "react";
import { Link } from 'react-scroll'
import Resume from '../../pdfs/ajk-resume.pdf'

const Navigation = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const position = window.pageYOffset;
        setScroll(position);

        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);

    return (
        <nav id="navbar" className={`navbar navbar-light darken-4 fixed-top ${scroll ? 'navbar-collapse' : ''}`}>
            <div id="title-irminrics" className="navbar-brand">
                <div className="icon irminrics-dp" />JUN KANG
            </div>
            <div id="nav-container-right">
                <ul className="text-uppercase" id="nav-items">
                    <li className="nav-item active-nav-item "><Link to="projects-div" spy={true} smooth={true}><a className="nav-link active-nav-link" href="#/">Portfolio</a></Link></li>
                    <li className="nav-item"><a className="nav-link" href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
                    <li className="nav-item"><a className="nav-link" href="#/">About Me</a></li>
                    <li className="nav-item"><Link to="footer-div" spy={true} smooth={true}><a className="nav-link" href="#/">Contact</a></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
