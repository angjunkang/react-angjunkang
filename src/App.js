import './css/bootstrap/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './css/homepage.css';

// import './js/jquery.min.js'
// import './js/popper.min.js'
// import './js/bootstrap.min.js'
// import './js/mdb.min.js'
// import './js/anime.min.js'
// import './js/jquery.waypoints.min.js'
// import './js/typeit.min.js'
// import './js/homepage.js'

import Navigation from "./components/Navigation/Navigation";
import Progress from "./components/Navigation/Progress"
import Introduction from './components/Content/Introduction/Introduction';

function App() {
  return (
    <>
      <Navigation />
      <Progress />
      <Introduction />
    </>
  )
}

export default App;
