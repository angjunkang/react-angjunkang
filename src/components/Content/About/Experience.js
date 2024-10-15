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
                <h3 className="about-section-header">Experience</h3>
                <Company company={"Defence Science and Technology Agency"} description={"Cybersecurity Engineer"} date={"Jul 2024 - Present"} />
                <Company company={"ST Engineering"} description={"Internship"} date={"May 2023 - Jul 2023"} />
                <Company company={"Centre for Strategic Infocomm Technologies"} description={"Bonded Internship"} date={"May 2018 - Jul 2018"} />
                <Company company={"Cyber Security Researchers of Waikato"} description={"Overseas Internship Programme"} date={"Mar 2018 - May 2018"} />
            </div>
        </div>
    )
}

const Company = ({ company, description, date }) => {
    return (
        <div className="education-content">
            <div className='education-description'>
                <p className="about-title">{company}</p>
                <div className="about-description">{description} • <span className="font-italics">{date}</span>
                </div>
            </div>
        </div>
    )
}

export default Experience
