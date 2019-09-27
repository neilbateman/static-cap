import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Faqs, Runners, Zombies } from './Pages';




const Routes = () => (
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/faq" component={Faqs}/>
  <Route path="/runners" component={Runners}/>
  <Route path="/zombies" component={Zombies}/>
  </Switch>
);
export default Routes;
