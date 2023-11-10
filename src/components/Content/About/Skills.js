import { useState, useEffect } from 'react'

const Skills = () => {
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
                <h3 className="about-section-header">Skills</h3>
                <div className="education-content">
                    <div className="section-badge-div">
                        <p className="about-title">General</p>
                        <div className="about-badge-div mt-3">
                            <h5 className="about-badge">HTML/CSS</h5>
                            <h5 className="about-badge">Python</h5>
                            <h5 className="about-badge">Java</h5>
                            <h5 className="about-badge">JavaScript</h5>
                            <h5 className="about-badge">JQuery</h5>
                            <h5 className="about-badge">Swift</h5>
                            <h5 className="about-badge">Kotlin</h5>
                            <h5 className="about-badge">C#</h5>
                            <h5 className="about-badge">C++</h5>
                            <h5 className="about-badge">Appian</h5>

                        </div>
                    </div>
                    <div className="section-badge-div mt-3">
                        <p className="about-title">Database</p>
                        <div className="about-badge-div mt-3">
                            <h5 className="about-badge">SQL Developer</h5>
                            <h5 className="about-badge">MySQL</h5>
                            <h5 className="about-badge">Redis</h5>
                            <h5 className="about-badge">MongoDB</h5>
                            <h5 className="about-badge">MariaDB</h5>

                        </div>
                    </div>
                    <div className="section-badge-div mt-3">
                        <p className="about-title">Others</p>
                        <div className="about-badge-div mt-3">
                            <h5 className="about-badge">React</h5>
                            <h5 className="about-badge">NodeJS</h5>
                            <h5 className="about-badge">Bootstrap</h5>
                            <h5 className="about-badge">Material Design</h5>
                            <h5 className="about-badge">ASP.NET</h5>
                            <h5 className="about-badge">PyQt</h5>
                            <h5 className="about-badge">JSON</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
