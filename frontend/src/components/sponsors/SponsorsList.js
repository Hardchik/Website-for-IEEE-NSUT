import React from 'react'
import './sponsors.css'
import {Stack, Image} from '@chakra-ui/react'
import {FaMicrosoft, FaGoogle, FaGithub, } from 'react-icons/fa'
import {SiCodingninjas, SiNetflix, SiApple} from 'react-icons/si'

import p1 from "./award_images/Group 31.svg"
// import p2 from "./images/2.svg"
// import p3 from "./images/3.svg"
import p4 from "./award_images/Group 33.svg"
import p5 from "./award_images/Group 34.svg"
import p6 from "./award_images/Group 35.svg"

export default function SponsorList() {
    return(
        <Stack style={{justifyContent:'center'}}>
            <div className="services" id="services">
                <h2 style={{color:'#1B72F7', fontSize:'3rem', fontWeight:'800', textAlign:'center'}}>Sponsors</h2>
                <div className="container" style={{marginTop:'40px'}}>
                    <div className="box">
                        {/* <i className="fas fa-user-shield fa-4x"></i> */}
                        <FaGoogle className='i'/>
                        <h3>Google</h3>
                        <div className="info">
                            <a href="/">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        {/* <i className="fas fa-tools fa-4x"></i> */}
                        <FaMicrosoft className='i'/>
                        <h3>Microsoft</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        {/* <i className="fas fa-map-marked-alt fa-4x"></i> */}
                        <FaGithub className='i' />
                        <h3>GitHub</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        {/* <i className="fas fa-laptop-code fa-4x"></i> */}
                        <SiApple className='i'/>
                        <h3>Apple</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        {/* <i className="fas fa-palette fa-4x"></i> */}
                        <SiCodingninjas className='i' />
                        <h3>CodingNinjas</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="box">
                        {/* <i className="fas fa-bullhorn fa-4x"></i> */}
                        <SiNetflix className='i' />
                        <h3>Netflix</h3>
                        <div className="info">
                            <a href="#">Details</a>
                        </div>
                    </div>
                </div>

                <div className="port_grid">
                    <Image src={p1} alt="Image" width="370" preview className="grid_ele"/>
                    {/* <Image src={p2} alt="Image" width="370" preview className="grid_ele" />
                    <Image src={p3} alt="Image" width="370" preview className="grid_ele" /> */}
                    <Image src={p4} alt="Image" width="370" preview className="grid_ele" />
                    <Image src={p5} alt="Image" width="370" preview className="grid_ele" />
                    <Image src={p6} alt="Image" width="370" preview className="grid_ele" />
                </div>
            </div>
        </Stack>
    )
}