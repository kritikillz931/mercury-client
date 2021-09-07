import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {Mercury} from "./components/Mercury.js"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Mercury />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

