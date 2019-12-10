import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/layout';
import Content from './components/Content/content';
import About from './components/About/about';
import contact from './components/Contact/contact';
import Service from './components/Service/service';
import Portfolio from './components/Portfolio/portfolio';
import Academy from './components/Academy/academy';
import AcademyDetail from './components/Academy/academyDetail';
import Animate from './components/UI/Animate';

class App extends Component {
  render() {
    return (
      <Layout>
        <Animate />
        <Switch>
          <Route path='/' exact component={Content} />
          <Route path='/about-us' component={About} />
          <Route path='/contact-us' component={contact} />
          <Route path='/service' component={Service} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/academy' component={Academy} />
          <Route path='/course/:id' exact component={AcademyDetail} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
