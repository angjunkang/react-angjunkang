import { useState, useEffect } from "react";

const Navigation = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 200);
        });
    }, []);

    return (
        <nav id="navbar" className= {scroll ? "navbar navbar-collapse navbar-light darken-4 fixed-top" : "navbar navbar-light darken-4 fixed-top"}>
            <div id="title-irminrics" className="navbar-brand">
                <div className="icon irminrics-dp" />JUN KANG
            </div>
            <div id="nav-container-right">
                <ul className="text-uppercase" id="nav-items">
                    <li className="nav-item "><a id="nav-about" className="nav-link" onClick="scrollToAbout()" href="#/">About Me</a></li>
                    <li className="nav-item"><a id="nav-experience" className="nav-link" onClick="scrollToExperience()" href="#/">Experience</a></li>
                    <li className="nav-item"><a id="nav-awards" className="nav-link" onClick="scrollToAwards()" href="#/">Awards</a></li>
                    <li className="nav-item"><a id="nav-contact" className="nav-link" onClick="scrollToContact()" href="#/">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
