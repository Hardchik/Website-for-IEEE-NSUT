import React from "react";
import "./Carousel.scss";
import img1 from "../../assets/images/ieeecas.svg";
import img2 from "../../assets/images/ieeecs.svg";
import img3 from "../../assets/images/ieeeras.svg";
import img4 from "../../assets/images/ieeewie.svg";
function Carousel() {
  return (
    <div>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={img1} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img2} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img3} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img4} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img1} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img2} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img3} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img4} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img1} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img2} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img3} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img4} height="100" width="250" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
