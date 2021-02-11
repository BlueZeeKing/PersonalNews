import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const testData = {
  header: {
    maintitle: {
      title: 'BZ news',
      tagline: 'Noli esse stultus'
    },
    info: {
      date: 'Wed Feb 10',
      weather: {
        temp: '10º',
        img: null
      }
    }
  },
  body: [
    {
      title: 'test1',
      summary: 'test1 description',
      url: 'https://google.com'
    },
    {
      title: 'test2',
      summary: 'test2 description',
      url: 'https://bing.com'
    }
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <App data={testData}/>
  </React.StrictMode>,
  document.getElementById('main')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
