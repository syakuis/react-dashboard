import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import DashboardContainer from './containers/DashboardContainer';

class App {
  static main() {
    render(
      <DashboardContainer />,
      document.getElementById('app'),
    );
  }
}

App.main();
