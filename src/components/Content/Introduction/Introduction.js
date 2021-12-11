import TypeItContent from "./TypeItContent"
const Introduction = () => {
    return (
        <div id="intro-background">
            <div id="main-intro">
                <div id="intro-div">
                    <div className="typeText">
                        <TypeItContent />
                    </div>
                    <span className="intro-description">I am currently a Year 1 Computer Science Student at National University of Singapore.
                    </span>
                    <br />
                    <br />
                    <div className="button">Check out my work</div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
