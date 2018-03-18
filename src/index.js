import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Home = () => {
  return <h1>THIS IS THE HOME PAGE</h1>
};

const About = () => {
  return <h1>THIS IS THE ABOUT PAGE</h1>
};

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Root page</Link>
        </li>
        <li>
          <Link to="/about">About page</Link>
        </li>
        <li>
          <Link to="/home">Home page</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
