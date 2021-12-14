// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import MainPage from "./pages";
import AboutPage from "./pages/about";

function App() {
  return (
    <Router>
      <Route exact path='/' component={MainPage} />
      <Route exact path="/about" component={AboutPage} />
    </Router>
  )
}

export default App;
