import React from "react";

import "../src/css/style.css";
import "../src/css/Section3.css";

function Section3(){
  return <div>
    <section class="page-section" id="contact">
            <div class="container">
                {/* <!-- Contact Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">모임연혁</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- Contact Section Form--> */}
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div id="historyDv" class="table">
                            <table class="table_blue history">
                                <colgroup>
                                    <col width="18%"></col>
                                    <col width="20%"></col>
                                    <col width="*"></col>
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row" rowspan="6">2021년</th>
                                        <td class="point-style01">02월 08일</td>
                                        <td class="detail">모임창설 <br />
                                            - 모임장 : 임포스터 <br />
                                            - 운영진 : 발가락 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="point-style01">04월 01일</td>
                                        <td class="detail">한줄코딩 프로젝트 시작 (3개팀)</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    </div>
            </div>
        </section>
  </div>
}

export default Section3;