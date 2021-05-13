import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/js/Header';
import Nav from '../src/js/Nav';
import Menu from '../src/js/Menu';
import Section1 from '../src/js/Section1';
import Section2 from '../src/js/Section2';
import Section3 from '../src/js/Section3';
import Bottom from '../src/js/Bottom';


ReactDOM.render(<Nav />, document.getElementById("mainNav"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Menu />, document.getElementById("menu"));
ReactDOM.render(<Section1 />, document.getElementById("section1"));
ReactDOM.render(<Section2 />, document.getElementById("section2"));
ReactDOM.render(<Section3 />, document.getElementById("section3"));
ReactDOM.render(<Bottom />, document.getElementById("bottom"));

