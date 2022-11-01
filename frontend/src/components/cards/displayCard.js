// import CS from './cs'
// import CAS from './cas'
// import WIE from './wie'
// import RAS from './ras'
import "./cards.css";
import {Stack} from '@chakra-ui/react'
import cslogo from "../../assets/images/ieeecs.svg";
import caslogo from "../../assets/images/ieeecas.svg";
import raslogo from "../../assets/images/ieeeras.svg";
import wielogo from "../../assets/images/ieeewie.svg";

export default function Card() {
    return(
        <Stack className="services" id='services'>
            <div className="card_service_wrap">
                <div className="card_service">
                <img src={cslogo} className="svgicon" />
                <div className="card_service_head">CS Chapter</div>
                <div className="card_service_body">
                    Computer Society (CS), is a technical and student chapter from IEEE, it dedicates itself to make progress on the areas related to computing, more information can be seen on Site CS.
                </div>
                <a href="https://www.computer.org/" style={{textDecoration:"none"}}> <div className="card_service_btn">Contact Us</div></a>
                </div>
                <div className="card_service">
                <img src={wielogo} className="svgicon" />
                <div className="card_service_head">WIE Affinity Group</div>
                <div className="card_service_body">
                IEEE WIE is one of the world’s leaders in changing the face of engineering. Our global network connects over 30,000 members to advance women in technology at all points in their lives and careers.
                </div>
                <a href="https://wie.ieee.org/" style={{textDecoration:"none"}}>  <div className="card_service_btn">Contact Us</div></a>
                </div>
                <div className="card_service">
                <img src={raslogo} className="svgicon" />
                <div className="card_service_head">RAS Chapter</div>
                <div className="card_service_body">
                The IEEE Robotics and Automation Society (IEEE RAS) is a professional society of the IEEE that supports the development and the exchange of scientific knowledge in the fields of robotics and automation.
                </div>
                <a href="https://www.ieee-ras.org/" style={{textDecoration:"none"}}> <div className="card_service_btn">Contact Us</div></a>
                </div>
                <div className="card_service">
                <img src={caslogo} className="svgicon" />
                <div className="card_service_head">CAS Chapter</div>
                <div className="card_service_body">
                CAS focuses on the theory, analysis, design, and implementation of circuits and systems. The field spans theoretical foundations, applications, and circuits implementations of algorithms for signal processing.
                </div>
                <a href="https://ieee-cas.org/" style={{textDecoration:"none"}}><div className="card_service_btn">Contact Us</div></a>

                </div>
            </div>
        </Stack>
    )
}