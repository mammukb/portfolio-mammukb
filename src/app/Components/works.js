import React from "react";
import Skills from "./skills";
import Seatmepic from "/public/seatme.png";
import Image from "next/image";
import wimspic from "/public/wims.png";
import Stpic from "/public/smart.png";

function Aboutme() {
  return (
    < >
      <div  className=" works  flex lg:flex-row sm:flex-col justify-around   lg:m-24  sm:m-5   "   >
      <div  className="lg:text-8xl sm:text-5xl flex gap-2 flex-col font-black font-serif"  >
      <h1>my works.</h1>
      <h1>my projects.</h1>
      <h1>my skills.</h1>
      <p   className="text-base font-light para  "  >Working as a <span>team</span> and <span>individually</span>Completing <span>On time</span>.<br/> learning <span>new technologies</span> and <span>adaptable</span> to them </p>
      </div>
      <div>

 
<div className="container sm:hidden lg:flex">
  <div data-text="WIMS" className="glass sm:w-36">
  <Image src={wimspic}
  alt="wims pic"
  width={150}
  height={150}
  />
  </div>
  <div data-text="smart travelogue"    className="glass sm:w-4">
  <Image src={Stpic}
  alt="smart travelogue pic"
  width={150}
  height={150}
  />
    
  </div>
  <div data-text="Seatme"  className="glass sm:w-36">
  <Image src={Seatmepic}
  alt="Seatmepic"
  width={150}
  height={150}
  />
  </div>
</div>

<div class="cards lg:hidden sm:flex m-10">
    <div class="card red">
        <p class="tip">Seatme</p>
        <p class="second-text">Webapp used to arrange students in seat</p>
    </div>
    <div class="card blue">
        <p class="tip">Smart Travelogue</p>
        <p class="second-text">webapp for uploading travelogue</p>
    </div>
    <div class="card green">
        <p class="tip">WIMS</p>
        <p class="second-text">Wood Industry Management System</p>
    </div>



</div>
<a  className="button    lg:mt-10 sm:ml-20  " href="#">
            <span class="button__icon-wrapper">
                <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
            </span>
            Explore All
        </a>
        {/* /* From Uiverse.io by naveenkumarr-onyx */ }
<div class="card sm:mt-10 sm:ml-5">
  {/* <div class="header">My Skills</div> */}
  <div class="body">
    <div class="skill">
      <div class="skill-name html">HTML</div>
      <div class="skill-level">
        <div style={{width: "90%"}} class="skill-percent"></div>
      </div>
      <div class="skill-percent-number">90%</div>
    </div>
    <div class="skill">
      <div class="skill-name css">CSS</div>
      <div class="skill-level">
        <div style={{width: "80%"}} class="skill-percent"></div>
      </div>
      <div class="skill-percent-number">80%</div>
    </div>
    <div class="skill">
      <div class="skill-name js">React</div>
      <div class="skill-level">
        <div style={{width: "50%"}} class="skill-percent"></div>
      </div>
      <div class="skill-percent-number">50%</div>
    </div>
    <div class="skill">
      <div class="skill-name ">DBMS</div>
      <div class="skill-level">
        <div style={{width: "85%"}} class="skill-percent"></div>
      </div>
      <div class="skill-percent-number">85%</div>
    </div>
  </div>
</div>


      </div>
      
      </div>
    </>
  );
}

export default Aboutme;
