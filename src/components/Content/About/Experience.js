import CSIT from '../../../images/csit-icon.png'
import CROW from '../../../images/crow-icon.png'

const Experience = () => {
    return (
        <div className="education-div">
            <div className="education-text left">
                <h3 className="section-header">Experience</h3>
                <Company company={"Centre for Strategic Infocomm Technologies"} image={CSIT} description={"Internship"} date={"May 2018 - Jul 2018"} />
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
                <p class="about-title">{company}</p>
                <div className="description">{description}
                    <p>{date}</p> </div>
            </div>
        </div>
    )
}

export default Experience
