import React from 'react'
import "./OurServicePage.css"
import Ourservice from "../../containers/OurService/ourService"
import Intro from "./IntroSection/index"
import Questions from '../../Pages/InfromationPage/Questions'

function index() {
  return (
    <div>
    <Intro/>
    <Ourservice/>
    <Questions/>
      
    </div>
  )
}

export default index
