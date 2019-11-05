import React from 'react';
//import img from './img/photo.jpg'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import Gallery from './gallery/Gallery';
import Price from './price/Price';
import Contact from './contact/Contact';
import Futer from './futer/Futer';

const App = (props) => {
    return (
     <Router>
         <Header></Header>
         <Route exact path = '/' component = {Home} />
         <Route path = '/about' component = {About} />
         <Route path = '/gallery' component = {Gallery} />
         <Route path = '/price' component = {Price} />
         <Route path = '/contacts' component = {Contact} />
         <Futer/>
     </Router>
    )};

export default App;