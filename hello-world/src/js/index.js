import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Nav from './Nav';
import Menu from './Menu';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Bottom from './Bottom';
import Copyright from './Copyright';


ReactDOM.render(<Nav />, document.getElementById("mainNav"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Menu />, document.getElementById("menu"));
ReactDOM.render(<Section1 />, document.getElementById("section1"));
ReactDOM.render(<Section2 />, document.getElementById("section2"));
ReactDOM.render(<Section3 />, document.getElementById("section3"));
ReactDOM.render(<Bottom />, document.getElementById("bottom"));
ReactDOM.render(<Copyright />, document.getElementById("copyright"));

