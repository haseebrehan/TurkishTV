import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Home';
import Footer from './Footer'
import Header from './Header'
import Ertu  from './Ertu'
import Osman from './Osman'
import Pages1 from './pages1'
import Pages2 from './pages2'
import Pages3 from './pages3'
import Pagos1 from './pagos1'
import Pagos2 from './pagos2'
import Contact from './About';

function App() {
  return (
    
    <header>
        <Router>
        <Header/>
            <Switch>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/ertu">
                  <Ertu/>
                </Route>
                <Route path="/ertu/se1">
                <Pages1/>
                </Route>
                <Route path="/ertu/se2">
                <Pages2/>
                </Route>
                <Route path="/ertu/se3">
                <Pages3/>
                </Route>
                <Route exact path="/osm">
                  <Osman/>
                </Route>
                <Route path="/osm/se1">
                <Pagos1/>
                </Route>
                <Route path="/osm/se2">
                <Pagos2/>
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
