import React from 'react'
import './sponsors.css'
import {Stack, Image} from '@chakra-ui/react'
import {FaMicrosoft, FaGoogle, FaGithub, } from 'react-icons/fa'
import {SiCodingninjas, SiNetflix, SiApple} from 'react-icons/si'

import p1 from "./images/wolfram.jpeg"
import p2 from "./images/echo3D.jpeg"
import p3 from "./images/bubble.jpeg"
import p4 from "./images/unstop.jpeg"
import p5 from "./images/Taskade.jpeg"
import p6 from "./images/interviewCake.jpeg"
import p7 from "./images/xyz-logo-color.png"

export default function SponsorList() {
    return(
        <Stack style={{justifyContent:'center'}}>
            <div className="services" id="services">
                <h2 style={{color:'#1B72F7', fontSize:'3rem', fontWeight:'800', textAlign:'center'}}>Sponsors</h2>
                <div className="container" style={{marginTop:'40px'}}>
                    <div className="box">
                        {/* <i className="fas fa-user-shield fa-4x"></i> */}
                        {/* <FaGoogle className='i'/> */}
                        <Image src={p1} alt="Image" style={{width:'18rem', marginLeft:'auto', marginRight:'auto'}} preview className="grid_ele"/>
                        <h3>Wolfram Language</h3>
                        <div className="info">
                            <a href="https://www.wolfram.com/language/" target='_blank'>Details</a>
                        </div>
                    </div>
                    <div className="box">
                        {/* <i className="fas fa-tools fa-4x"></i> */}
                        {/* <FaMicrosoft className='i'/> */}
                        <Image src={p7} alt="Image" style={{width:'10.9rem', marginLeft:'auto', marginRight:'auto'}} preview className="grid_ele"/>
                        <h3>.XYZ</h3>
                        <div className="info">
                            <a href="https://gen.xyz/" target='_blank'>Details</a>
                        </div>
                    </div>
                    <div className="box">
                        {/* <i className="fas fa-map-marked-alt fa-4x"></i> */}
                        {/* <FaGithub className='i' /> */}
                        <Image src={p2} alt="Image" style={{width:'18rem', marginLeft:'auto', marginRight:'auto', marginTop:'81px'}} preview className="grid_ele"/>
                        <h3>echo3D</h3>
                        <div className="info">
                            <a href="https://www.echo3d.com/" target='_blank'>Details</a>
                        </div>
                    </div>
                    <div className="box">
                        {/* <i className="fas fa-laptop-code fa-4x"></i> */}
                        {/* <SiApple className='i'/> */}
                        <Image src={p5} alt="Image" style={{width:'11.6rem', marginLeft:'auto', marginRight:'auto', marginTop:'81px'}} preview className="grid_ele"/>
                        <h3>Taskade</h3>
                        <div className="info">
                            <a href="https://www.taskade.com/" target='_blank'>Details</a>
                        </div>
                    </div>
                    <div className="box">
                        {/* <i className="fas fa-palette fa-4x"></i> */}
                        {/* <SiCodingninjas className='i' /> */}
                        <Image src={p4} alt="Image" style={{width:'7.3rem', marginLeft:'auto', marginRight:'auto', marginTop:'81px'}} preview className="grid_ele"/>
                        <h3>UnStop</h3>
                        <div className="info">
                            <a href="https://unstop.com/home" target='_blank'>Details</a>
                        </div>
                    </div>
                    <div className="box">
                        {/* <i className="fas fa-bullhorn fa-4x"></i> */}
                        {/* <SiNetflix className='i' /> */}
                        <Image src={p3} alt="Image" style={{width:'7.3rem', marginLeft:'auto', marginRight:'auto', marginTop:'81px'}} preview className="grid_ele"/>
                        <h3>.bubble</h3>
                        <div className="info">
                            <a href="https://bubble.io/" target='_blank'>Details</a>
                        </div>
                    </div>
                </div>

                <div className="port_grid">
                    <Image src={p1} alt="Image" width="370" preview className="grid_ele"/>
                    <Image src={p2} alt="Image" width="370" preview className="grid_ele" />
                    <Image src={p3} alt="Image" width="370" preview className="grid_ele" />
                    <Image src={p4} alt="Image" width="370" preview className="grid_ele" />
                    <Image src={p5} alt="Image" width="370" preview className="grid_ele" />
                    <Image src={p6} alt="Image" width="370" preview className="grid_ele" />
                </div>
            </div>
        </Stack>
    )
}