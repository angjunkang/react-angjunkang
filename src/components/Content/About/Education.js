import { useState, useEffect } from 'react'

const Education = () => {
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        const position = window.pageYOffset;
        setVisible(position);

        window.addEventListener("scroll", () => {
            setVisible(window.scrollY > 900);
        });

        return () => {
            setVisible({});
        };

    }, []);

    return (
        <div className={`education-div fadeIn ${isVisible ? 'visible' : ''}`} >
            <div className="education-text left">
                <h3 className="about-section-header">Education</h3>
                <Schools school={"National University of Singapore"} description={"Bachelor of Computing (Honours) in Computer Science"} date={"Aug 2021 - Aug 2024"} />
                <Schools school={"Nanyang Polytechnic"} description={"Diploma in Information Technology w Merit"} date={"Apr 2016 - Apr 2019"} />
            </div>
        </div>
    )
}

const Schools = ({ school, description, date }) => {
    return (
        <div className="education-content">
            <div className='education-description'>
                <p className="about-title">{school}</p>
                <div className="about-description">{description}
                    <p>{date}</p> </div>
            </div>
        </div>
    )
}

export default Education
