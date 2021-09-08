/* eslint-disable jsx-a11y/iframe-has-title */
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Footer from './Footer'
import Header from './Header'
import Contact from './Contact'
import Ertu  from './Ertu'
import Osman from './Osman'
import Video1 from './video1';

//import CallApi from './callApi';

function App() {
  return (
    
    <header>
        <Router>
        <Header/>
            <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/ertu">
                  <Ertu/>
                </Route>
                <Route path="/ertu/se1">
                <Video1/>
                </Route>
                <Route path="/osman">
                  <Osman/>
                </Route>
                <Route path="/">
                  <Home />
                </Route>
            </Switch>
            <Footer/>
        </Router>
      </header>
  );
}

export default App;
