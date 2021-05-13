import React from "react";
import "../css/style.css";
import "../css/Nav.css";

function mainNav(){
  return <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">한줄코딩</a>
        <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="">한줄코딩</a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="">게시판</a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="">발표</a></li>
                <li class="nav-item mx-0 mx-lg-1"><button class="py-3 px-0 px-lg-3 rounded btn btn-primary">login</button></li>
                <li class="nav-item mx-0 mx-lg-1"><button class="py-3 px-0 px-lg-3 rounded btn btn-primary">logout</button></li>
            </ul>
        </div>
    </div>
}

export default mainNav;
