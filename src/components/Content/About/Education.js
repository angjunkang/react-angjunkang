import NUS from '../../../images/nus-icon.png'
import NYP from '../../../images/nyp-icon.png'

const Education = () => {
    return (
        <div className="education-div">
            <div className="education-text left">
                <h3 className="section-header">Education</h3>
                <Schools school={"National University of Singapore"} image={NUS} description={"Bachelor of Computing (Honours) in Computer Science"} date={"Aug 2021 - Present"} />
                <Schools school={"Nanyang Polytechnic"} image={NYP} description={"Diploma in Information Technology w Merit"} date={"Apr 2016 - Apr 2019"} />
            </div>
        </div>
    )
}

const Schools = ({ school, image, description, date }) => {
    return (
        <div className="education-content">
            <img className='education-icon left' src={image} alt="" />
            <div className='education-description'>
                <p class="about-title">{school}</p>
                <div className="description">{description}
                    <p>{date}</p> </div>
            </div>
        </div>
    )
}

export default Education
