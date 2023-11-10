import SkylabImage from '../../../images/skylab.png'
import { useState, useEffect } from 'react'

const Skylab = () => {
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        const position = window.pageYOffset;
        setVisible(position);

        window.addEventListener("scroll", () => {
            setVisible(window.scrollY > 600);
        });

        return () => {
            setVisible({});
        };

    }, []);

    return (
        <div className={`projects-container fadeIn ${isVisible ? 'visible' : ''}`} >
            <div className="projects-text left">
                <h3 className="project-section-header">Skylab</h3>
                <p className="project-description">An Orbital 2022 Project which aims to revamp and recreate the existing Orbital Skylab for Orbital (CP2106) by allowing students, advisers, mentors, and administrators to use the platform with ease and additional features.</p>
                <h5 className="projects-badge-react">React</h5>
                <div className="projects-button"><a className='button' href="https://github.com/Irminrics/orbital-project" target='_blank' rel='noopener noreferrer'>Find out more</a></div>
            </div>
            <div className='projects-image right'>
                <img className='site' alt="Skylab Screenshot" src={SkylabImage} />
            </div>
        </div>
    )
}

export default Skylab
