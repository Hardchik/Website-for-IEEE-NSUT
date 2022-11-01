import React from 'react'
import "./Awards.css"
import Awardcar from './carousel/Awardcar'
function Awards() {
  return (
    <div className='awards' id="achievements">
        <div className='bold_wrap'>

        <div className='award_1' style={{textAlign: 'center', fontSize: '50px', fontWeight: '650'}}>Our Achievements</div>
        <div className='award_2' style={{textAlign: 'center', fontSize: '50px', fontWeight: '650'}}>Awards</div>
        </div>
        <Awardcar/>
    </div>
  )
}

export default Awards