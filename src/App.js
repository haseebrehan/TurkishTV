import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Footer from './Footer'
import Header from './Header'
import Contact from './Contact'
import Ertu  from './Ertu'
import Osman from './Osman'

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
                <Route path="/ertu">
                  <Ertu/>
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
