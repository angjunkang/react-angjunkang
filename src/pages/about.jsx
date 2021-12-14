import Navigation from "../components/Header/Navigation";
import Progress from "../components/Header/Progress";
import Wallpaper from "../components/Content/Introduction/Wallpaper";
import Footer from '../components/Footer/Footer';

const AboutPage = () => {
    return (
        <>
            <Navigation isMainPage={false} />
            <Progress isMainPage={false} />
            <Wallpaper />
            <br />
            <br />
            <br />
            <Footer />
        </>
    )
}

export default AboutPage
