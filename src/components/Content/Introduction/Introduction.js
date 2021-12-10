import TypeItContent from "./TypeItContent"
import Resume from "../../../images/ajk-resume.jpg"
const Introduction = () => {
    return (
        <div id="intro-background">
            <div id="main-intro">
                <div id="intro-div">
                    <div className="typeText">
                        <TypeItContent />
                    </div>
                    <span className="intro-description">This site is still under construction. I am working hard to make this
                        website available as soon as possible.
                        Until then, I look forward to seeing you on any of my social media!
                    </span>
                    <br />
                    <br />
                    <a href={Resume} download="angjunkang-resume">
                        <button className="btn btn-rounded resume-btn">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Introduction
