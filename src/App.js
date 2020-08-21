import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './components/Contact/contact-modal';
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header/>
        <Route exact path="/" component={About}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
