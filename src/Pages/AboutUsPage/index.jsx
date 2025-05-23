import React from 'react'
import './AboutUsPage.css';
import Mission from "./MissionPage/index"
import OurStory from "./OurStory/index"
import MeetTeam from "../../containers/TeamsDetails/TeamsDetails"

function index() {
  return (
    <div className='b12-m-wt'>

    <div className='about-us-parent-class'>
      <Mission/>
      <MeetTeam/>
      <OurStory/>
      
    </div>

    </div>
  )
}

export default index
