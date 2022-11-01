import React from 'react'
import Car1 from './carousel/Car1'
import Car2 from './carousel/Car2'
import Car3 from './carousel/Car3'
import "./Team.css"
function Team() {
  return (
    <div className='team' style={{marginTop:"120px"}} id="team">
      <div className='team_left'>
        <div className='team_l_head'>Team</div>
        <div className='team_l_body'>
        The IEEE NSUT team is key behind an exponential growth of IEEE NSUT Student Branch. It got a well-defined collection of students skilled in diverse domains with advance leadership skills.
        </div>
        <div className='b_c_btn'>Know more</div>
      </div>
      <div className='team_right'>
        <Car1/>
        <Car2/>
        <Car3/>
      </div>
    </div>
  )
}

export default Team