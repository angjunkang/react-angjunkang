import TypeItContent from "./TypeItContent"
import { Link } from 'react-scroll'

const Introduction = () => {
    return (
        <div id="intro-background">
            <div id="main-intro">
                <div id="intro-div">
                    <div className="typeText">
                        <TypeItContent />
                    </div>
                    <span className="intro-description">I am currently a Final Year Computer Science Student at National University of Singapore.
                    </span>
                    <br />
                    <br />
                    <Link to="projects-div" spy={true} smooth={true}><div className="button center">Check out my work</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Introduction
