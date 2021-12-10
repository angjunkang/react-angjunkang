import TypeItContent from "./TypeItContent"

const Introduction = () => {
    return (
        <div id="intro-background">
            <div id="main-intro">
                <div id="intro-div">
                    <div className="typeText">
                        {/* <div className="content" /> */}
                        <TypeItContent />
                    </div>
                    <span className="intro-description">This site is still under construction. I am working hard to make this
                        website available as soon as possible.
                        Until then, I look forward to seeing you on any of my social media!
                    </span>
                    <br />
                    <br />
                    <form method="get" action="../images/ajkresume.jpg">
                        <button className="btn btn-rounded resume-btn" type="submit">Resume</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Introduction
