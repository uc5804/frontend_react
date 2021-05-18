import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export { default as Mainpage } from './js/main/Mainpage';
export { default as Boardpage } from './js/board/Boardpage';
//export { default as About } from './About';

ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
  
    document.getElementById('root')
  );
// ReactDOM.render(<Nav />, document.getElementById("mainNav"));
// ReactDOM.render(<Header />, document.getElementById("header"));
// ReactDOM.render(<Menu />, document.getElementById("menu"));
// ReactDOM.render(<Section1 />, document.getElementById("section1"));
// ReactDOM.render(<Section2 />, document.getElementById("section2"));
// ReactDOM.render(<Section3 />, document.getElementById("section3"));
// ReactDOM.render(<Footer />, document.getElementById("footer"));
// ReactDOM.render(<Copyright />, document.getElementById("copyright"));
