import Navigation from "../components/Header/Navigation";
import Progress from "../components/Header/Progress";
import Wallpaper from "../components/Content/Introduction/Wallpaper";
import Description from "../components/Content/About/Description";
import Footer from '../components/Footer/Footer';
import Education from "../components/Content/About/Education";

const AboutPage = () => {
    return (
        <>
            <Navigation isMainPage={false} />
            <Progress isMainPage={false} />
            <Wallpaper />
            <div id="about-div">
                <div className="container-wrapper">
                    <div id="projects-div-header" className="text-uppercase"> About Me </div>
                    <Description />
                    <Education />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage