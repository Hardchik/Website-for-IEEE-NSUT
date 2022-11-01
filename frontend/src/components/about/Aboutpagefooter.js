import './About.css'
import './counter.css'
import React, { useEffect } from 'react'
import {BsPeopleFill, BsAwardFill, BsGlobe2} from 'react-icons/bs'
import {MdSchool} from 'react-icons/md'

function AboutPageFooter() {
    let [count, setCount] = React.useState();
    useEffect(() => {
        let valueDisplays = document.querySelectorAll(".num");
        let interval = 4000;

        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                clearInterval(counter);
                }
            }, duration);
        });
    }, [])
    return (
      <div>
        {/* <div className="AboutPageFooter">
          <div className="AboutPageFooter_Subcontainer">
              <div className="columnn">
                  <br />
                  <h4 className="value_abt">
                      220+
                  </h4>
                  <h5>
                      IEEE student members
                  </h5>
              </div>
          </div>
          <div className="AboutPageFooter_Subcontainer">
              <div className="columnn">
                  <br />
                  <h4 className="value_abt">
                      10+
                  </h4>
                  <h5>
                      Awards won
                  </h5>
              </div>
          </div>
          <div className="AboutPageFooter_Subcontainer">
              <div className="columnn">
                  <br />
                  <h4 className="value_abt">
                      50+
                  </h4>
                  <h5>
                      Events completed
                  </h5>
              </div>
          </div>
        </div> */}

        <div className="wrapper">
      <div className="container">
        {/* <i className="fas fa-utensils"></i> */}
        <BsPeopleFill className="fas_f"/>
        <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
            <span className="num" data-val="220">000</span>
            <span style={{fontWeight: 600, fontSize: '3em'}}>+</span>
        </div>
        <span className="text">Members</span>
      </div>
      <div className="container">
        {/* <i className="fas fa-smile-beam"></i> */}
        <BsAwardFill className="fas_f" />
        <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
            <span className="num" data-val="10">000</span>
            <span style={{fontWeight: 600, fontSize: '3em'}}>+</span>
        </div>
        <span className="text">Awards</span>
      </div>
      <div className="container">
        {/* <i className="fas fa-list"></i> */}
        <BsGlobe2 className="fas_f" />
        <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
            <span className="num" data-val="50">000</span>
            <span style={{fontWeight: 600, fontSize: '3em'}}>+</span>
        </div>
        <span className="text">Events</span>
      </div>
      <div className="container">
        {/* <i className="fas fa-star"></i> */}
        <MdSchool className="fas_f" />
        <span className="num" data-val="1">000</span>
        <span className="text">Student Branch</span>
      </div>
    </div>

      </div>
      
    )
  }
  
  export default AboutPageFooter