import DisplayPicture from '../../../images/about-me-irminrics.png'
import { useState, useEffect } from 'react'

const Description = () => {
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        const position = window.pageYOffset;
        setVisible(position);

        window.addEventListener("scroll", () => {
            setVisible(window.scrollY > 50);
        });

        return () => {
            setVisible({});
        };
        
    }, []);
    
    return (
        <div className={`description-div row fadeIn ${isVisible ? 'visible' : ''}`} >
            <div className="description-header"></div>
            <div className="description-picture col-lg-6 col-md-12">
                <img src={DisplayPicture} alt="Jun Kang's DP" id="about-me-picture" />
            </div>
            <div className="description-text col-lg-6 col-md-12">
                <div className='description-text-wrapper'>
                    <p>Hello there, I am Jun Kang, a Year 1 Computer Science student at National University of Singapore.
                    </p>
                    <p>I grew up in Singapore and as a child, I was fascinated by computer games and shows that involved programming and software development. I always thought it was cool
                        to be a programmer and would imagine myself, developing a new game or software that will make a big hit and change the world.
                        This ultimately led me towards Nanyang Polytechnic to pursue a Diploma in Information Technology.</p>
                    <p>With broad exposure to the computing field, I realize programming is such a powerful tool and
                        brings limitless possibilities. It has power to solve complex problems with automated solutions
                        and even to bring ideas from the brain to life. With modern libraries, coding languages, and
                        operating systems developing even as you are reading this, learning in this field is a
                        never-ending journey. This is what affirmed my deep passion and interest in the computing field.
                    </p>
                    <p>Feel free to contact me if you would like to collaborate or discuss possibilities!</p>
                </div>
            </div>
        </div>
    )
}

export default Description
