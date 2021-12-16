import WeatherImage1 from '../../../images/weather-1.png'
import WeatherImage2 from '../../../images/weather-2.png'
import { useState, useEffect } from 'react'

const Weather = () => {
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        const position = window.pageYOffset;
        setVisible(position);

        window.addEventListener("scroll", () => {
            setVisible(window.scrollY > 1100);
        });
    }, []);

    return (
        <div className={`projects-container fadeIn ${isVisible ? 'visible' : ''}`} >
            <div className="projects-text right">
                <h3 className="section-header">Weather</h3>
                <p className="description">A Weather IOS app done using SwiftUI! Check the weather for your favourite countries easily anytime and anywhere.</p>
                <h5 className="projects-badge">Swift</h5>
                <div className="projects-button"><a className='button' href="https://github.com/Irminrics/weather-swift" target='_blank' rel='noopener noreferrer'>Find out more</a></div>
            </div>
            <div className='projects-image left'>
                <img className='image' alt="Weather Screenshot 1" src={WeatherImage1} />
                <img className='image' alt="Weather Screenshot 2" src={WeatherImage2} />
            </div>
        </div>
    )
}

export default Weather
