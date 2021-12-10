import './css/bootstrap/bootstrap.min.css';
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
import Introduction from './components/Content/Introduction';

function App() {
  return (
    <>
      <Navigation />
      <Progress />
      <Introduction />
    </>
  );
}

export default App;
