import PickupLinesImage1 from '../../../images/pickuplines-1.png'
import PickupLinesImage2 from '../../../images/pickuplines-2.png'
import { useState, useEffect } from 'react'

const PickupLines = () => {
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
                <h3 className="project-section-header">Pickup Lines</h3>
                <p className="project-description">An IOS app with access to pickup lines on your fingertips done using SwiftUI. Get access to a bunch of pickup lines with a single tap.</p>
                <h5 className="projects-badge-swift">Swift</h5>
                <div className="projects-button"><a className='button' href="https://github.com/Irminrics/pickup-lines-swift" target='_blank' rel='noopener noreferrer'>Find out more</a></div>
            </div>
            <div className='projects-image right'>
                <img className='image px-4' alt="Pickup Lines Screenshot 1" src={PickupLinesImage1} />
                <img className='image px-4' alt="Pickup Lines Screenshot 2" src={PickupLinesImage2} />
            </div>
        </div>
    )
}

export default PickupLines
