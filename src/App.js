import React from "react";
import {Route} from 'react-router-dom';
import {Mainpage,Boardpage} from '.';

import Nav from './js/common/Nav';
import Footer from './js/common/Footer';
import Copyright from './js/common/Copyright';

function App(){
  return(
    <div>
        <Nav/>
        <Route exact path="/" component={Mainpage}/>
        <Route exact path="/board" component={Boardpage}/>
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default App;