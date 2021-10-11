import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import Barnav from './Barnav';
import History from './History';
import Significance from './Significance';
import Argh from './Argh';
import Headings from './Headings';
import Carousel1 from './Carousel1';
import Devotees from './Devotees';
import Errorpage from './Errorpage';
import Footer from './Footer';
function App() {
  return (
    <>
    <Barnav/>
    <Carousel1/>
    <Headings/>
    <Switch>
      <Route exact path="/chhathpuja" component={Home}/>
      <Route exact path="/history" component={History}/>
      <Route exact path="/significance" component={Significance}/>
      <Route exact path="/argh" component={Argh}/>
      <Route exact path="/devotees" component={Devotees}/>
      <Route component={Errorpage}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
