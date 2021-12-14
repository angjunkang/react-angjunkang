import '../css/bootstrap/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../css/homepage.css';

import Navigation from "../components/Header/Navigation";
import Progress from "../components/Header/Progress"
import Introduction from '../components/Content/Introduction/Introduction';
import Projects from '../components/Content/Projects/Projects';
import Footer from '../components/Footer/Footer';

const MainPage = () => {
    return (
        <>
            <Navigation isMainPage={true} />
            <Progress isMainPage={true}/>
            <Introduction />
            <Projects />
            <Footer />
        </>
    )
}

export default MainPage
