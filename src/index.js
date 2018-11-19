import React from 'react';
import { render } from 'react-dom';
// Components
import Header from './components/header';
// CSS
import './style/css/materialize.min.css';
import './index.css';

render(
  <Header />,
  document.getElementById('root')
);
