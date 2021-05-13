import React from "react";
import "./css/style.css";
import "./css/Header.css";

function Header(){
  return <div class="container d-flex align-items-center flex-column">
            <img class="masthead-avatar mb-5" src="assets/img/hanjul.jpg" alt="" />
            <h1 class="masthead-heading text-uppercase mb-0">한줄코딩</h1>
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <p class="masthead-subheading font-weight-light mb-0">웹개발자 커뮤니티</p>
          </div>
}

export default Header;
