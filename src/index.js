import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login'
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import SingleArticle from './components/SingleArticle';
import CreateArticle from './components/CreateArticle';

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
      <Navbar />
      <Route exact path="/" component={Welcome} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/article/:slug" component={SingleArticle} /> 
      <Route path="/articles/create" component={CreateArticle} />
      <Footer />
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
