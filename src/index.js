import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/js/main//Header';
import Nav from '../src/js/main/Nav';
import Menu from '../src/js/main/Menu';
import Section1 from '../src/js/main/Section1';
import Section2 from '../src/js/main/Section2';
import Section3 from '../src/js/main/Section3';
import Footer from './js/main/Footer';
import Copyright from '../src/js/main/Copyright';


ReactDOM.render(<Nav />, document.getElementById("mainNav"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Menu />, document.getElementById("menu"));
ReactDOM.render(<Section1 />, document.getElementById("section1"));
ReactDOM.render(<Section2 />, document.getElementById("section2"));
ReactDOM.render(<Section3 />, document.getElementById("section3"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
ReactDOM.render(<Copyright />, document.getElementById("copyright"));

