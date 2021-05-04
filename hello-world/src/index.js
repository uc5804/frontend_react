import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
import Bottom from './Bottom';

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Menu />, document.getElementById("menu"));
ReactDOM.render(<Content />, document.getElementById("content"));
ReactDOM.render(<Bottom />, document.getElementById("bottom"));

