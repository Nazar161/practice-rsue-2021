import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import OurService from './services/service';
import OurServiceContext from './components/our-service-context';



const ourService = new OurService();

ReactDOM.render(
  <Provider store={store}>
    <OurServiceContext.Provider value={ourService}>
      <App />
    </OurServiceContext.Provider>
  </Provider>
,document.getElementById('root')
);
