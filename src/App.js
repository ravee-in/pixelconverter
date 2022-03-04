import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Pxtoem from './components/converters/Pxtoem';
import Emtopx from './components/converters/Emtopx';
import PxToRem from './components/converters/PxToRem';
import RemToPx from './components/converters/RemToPx';
import PxToPt from './components/converters/PxToPt';
import PtToPx from './components/converters/PtToPx';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pxtoem">
            <Pxtoem title="Px to Em"/>
          </Route>
          <Route exact path="/emtopx">
            <Emtopx />
          </Route>
          <Route exact path="/pxtorem">
            <PxToRem />
          </Route>
          <Route exact path="/remtopx">
            <RemToPx />
          </Route>
          <Route exact path="/pxtopt">
            <PxToPt />
          </Route>
          <Route exact path="/pttopx">
            <PtToPx />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
