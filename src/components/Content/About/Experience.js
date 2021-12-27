import CSIT from '../../../images/csit-icon.png'
import CROW from '../../../images/crow-icon.png'
import { useState, useEffect } from 'react'

const Experience = () => {
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        const position = window.pageYOffset;
        setVisible(position);

        window.addEventListener("scroll", () => {
            setVisible(window.scrollY > 1200);
        });

        return () => {
            setVisible({});
        };

    }, []);

    return (
        <div className={`education-div fadeIn ${isVisible ? 'visible' : ''}`} >
            <div className="education-text left">
                <h3 className="section-header">Experience</h3>
                <Company company={"Centre for Strategic Infocomm Technologies"} image={CSIT} description={"Bonded Internship"} date={"May 2018 - Jul 2018"} />
                <Company company={"Cyber Security Researchers of Waikato"} image={CROW} description={"Overseas Internship Programme"} date={"Mar 2018 - May 2018"} />
            </div>
        </div>
    )
}

const Company = ({ company, image, description, date }) => {
    return (
        <div className="education-content">
            <img className='education-icon left' src={image} alt="" />
            <div className='education-description'>
                <p className="about-title">{company}</p>
                <div className="description">{description}
                    <p>{date}</p> </div>
            </div>
        </div>
    )
}

export default Experience
