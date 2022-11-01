import React from "react";
import "./Portfolio.css";
import p1 from "./images/1.svg"
import p2 from "./images/2.svg"
import p3 from "./images/3.svg"
import p4 from "./images/4.svg"
import p5 from "./images/7.svg"
import p6 from "./images/6.svg"
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Image } from 'primereact/image';
function Portfolio() {

  return (
    <div className="portfolio" id="galleria">
      <div className="heads_port">

      <div className="portfolio_a">OUR SHOWCASE</div>
      <div className="portfolio_b">
        Galleria
      </div>
      </div>
      <div className="port_grid">
      <Image src={p1} alt="Image" width="370" preview className="grid_ele"/>
      {/* <Image src={p2} alt="Image" width="370" preview className="grid_ele" />
      <Image src={p3} alt="Image" width="370" preview className="grid_ele" />
      <Image src={p4} alt="Image" width="370" preview className="grid_ele" /> */}
      <Image src={p5} alt="Image" width="370" preview className="grid_ele" />
      <Image src={p6} alt="Image" width="370" preview className="grid_ele" />
      </div>
    </div>
  );
}

export default Portfolio;
