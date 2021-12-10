const Navigation = () => {
    return (
        <nav id="navbar" className="navbar navbar-light darken-4 fixed-top">
            <div id="title-irminrics" className="navbar-brand">
                <div className="icon irminrics-dp" />JUN KANG
            </div>
            <div id="nav-container-right">
                <ul className="text-uppercase" id="nav-items">
                    <li className="nav-item "><a id="nav-about" className="nav-link" onclick="scrollToAbout()" href="#/">About Me</a></li>
                    <li className="nav-item"><a id="nav-experience" className="nav-link" onclick="scrollToExperience()" href="#/">Experience</a></li>
                    <li className="nav-item"><a id="nav-awards" className="nav-link" onclick="scrollToAwards()" href="#/">Awards</a></li>
                    <li className="nav-item"><a id="nav-contact" className="nav-link" onclick="scrollToContact()" href="#/">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
