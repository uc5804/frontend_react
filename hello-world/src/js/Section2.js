import React from "react";

import "../src/css/style.css";
import "../src/css/Section2.css";

function Section2(){
  return <div>
    <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                {/* <!-- About Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-white">한줄코딩</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div class="row">
                    <div class="col-lg-4 ml-auto"><p class="lead">웹개발자 커뮤니티입니다. 웹개발 취업을 지향하는 사람들, 또는 웹개발자로 취업을 하였지만 연차가 적으신 분들이 모여 기술에 대해 의논하고 발표하는 모임입니다.</p></div>
                    <div class="col-lg-4 mr-auto"><p class="lead">취업준비생들과 경험이 있는 사람들끼리 모여 소규모 프로젝트를 진행해, 본인의 프로젝트를 만들어 봅시다.</p></div>
                </div>
                {/* <!-- About Section Button--> */}
                <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light" href="http://somoim.friendscube.com/g/cce9424c-6838-11eb-af4e-0a96dcf2a91c1">
                        <i class="fas fa-download mr-2"></i>
                        가입하기
                    </a>
                </div>
            </div>
        </section>
  </div>
}

export default Section2;