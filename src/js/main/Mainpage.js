import React from "react";
import "../../css/style.css";

import Header from './Header'
import Menu from './Menu' 
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

function Mainpage(){
  return (
      <div>
        <Header/>
        <Menu/>
        <Section1/>
        <Section2/>
        <Section3/>
      </div>
  )
}

export default Mainpage;
