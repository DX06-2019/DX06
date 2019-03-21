import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import UsagePage from './pages/UsagePage';
import AboutPage from './pages/AboutPage';
import UtilityPage from './pages/UtilityPage';
import NotFoundPage from './pages/NotFoundPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/usage' component={UsagePage} />
        <Route path='/utility' component={UtilityPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
