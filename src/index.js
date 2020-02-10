import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const siteConfig = {
  brand: {
    title: 'SafeSchools Training',
    logoSrc:
      'https://a.trainingcdn.com/UniversalUI/v0.38/images/brand/ss/SS_ALERT.png',
    logoHref: '/',
  },
  umbrella: {
    title: 'Vector Solutions',
    logoSrc:
      'https://test.staging.safeschools.com/static/images/logos/by_vs.png',
    logoHref: 'https://www.vectorsolutions.com/',
  },
  dist: {
    title: 'Test District',
    logoSrc: 'https://pickatime.com/newVUI/uploadImg/11600926/School-Logo.png',
    logoHref: '/',
  },
  user: {
    username: 'lefleraa',
    first: 'Andrew',
    last: 'Lefler',
    full_name: 'Andrew Lefler',
  },
};

ReactDOM.render(
  <App siteConfig={siteConfig} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
