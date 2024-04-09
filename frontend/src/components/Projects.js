import React from 'react'
import Card from './Card'
import '../styles/Projects.css'
const Projects = () => {
  return (
    <div className='projects'>
      <Card
        title='IITHub'
        body= ' A web application using mern stack that connects 23 IITs, fostering collaboration in research, doubts solving, interest groups and career opportunities strengthening the IIT communitys network and capabilities'
        link="https://github.com/cs21b029/team5"/>
      <Card
        title='RideShare'
        body= ' The ”RideShare” Android app is a user-centric ride-sharing platform that promotes sustainable transportation by enabling users to share rides with verified co-passengers. It integrates GoogleMaps, Firebase, and user-friendly features for seamless and secure travel. It is build in Android Studio using Java and xml'
        link="https://github.com/cs21b029/RideShare"/>
      <Card
        title='Parking LOT'
        body= ' Implemented a parking lot using the basic yet powerful concepts of Oops, such as encapsulation, abstraction, inheritance, and polymorphism'
        link="https://drive.google.com/file/d/1EHTcelGnys6NBGkcc8Zq1KpoxOUANAEF/view"/>
      <Card
        title='ATM Simulator'
        body= ' It is a project which simulates atm operations using oops concepts in java programming language'
        link="https://drive.google.com/file/d/1JJEw4_96nmEVhVEbswqB4AX3BlaMMURf/view"/>
    </div>
  )
}

export default Projects
