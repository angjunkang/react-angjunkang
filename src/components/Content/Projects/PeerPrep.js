import PeerPrepImage from '../../../images/peerprep.png'
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
            <div className="projects-text right">
                <h3 className="project-section-header">PeerPrep</h3>
                <p className="project-description">PeerPrep is an innovative platform designed to enhance your coding learning journey through collaborative preparation. Whether you're gearing up for exams or mastering a new langyage, PeerPrep is here to make the process interactive and enjoyable.</p>
                <h5 className="projects-badge-react">React</h5>
                <div className="projects-button"><a className='button' href="https://github.com/angjunkang/peerprep" target='_blank' rel='noopener noreferrer'>Find out more</a></div>
            </div>
            <div className='projects-image left'>
                <img className='site' alt="Skylab Screenshot" src={PeerPrepImage} />
            </div>
        </div>
    )
}

export default Skylab
