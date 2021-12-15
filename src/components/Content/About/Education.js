const Education = () => {
    return (
        <div className="education-div">
            <div className="text left">
                <h3 className="section-header">Education</h3>
                <Schools school={"National University of Singapore"} description={"Bachelor of Computing (Honours) in Computer Science"} date={"Aug 2021 - Present"}/>
                <Schools school={"Nanyang Polytechnic"} description={"Diploma in Information Technology w Merit"} date={"Apr 2016 - Apr 2019"}/>
            </div>
        </div>
    )
}

const Schools = ({ school, description, date }) => {
    return (
        <div className="education-content">
            <p class="about-title">{school}</p>
            <div>
                <div className="description">{description}
                    <p>{date}</p> </div>
            </div>
        </div>
    )
}

export default Education
