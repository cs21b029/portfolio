import React from 'react'
import '../styles/About.css'
const About = () => {
  return (
    <div className='details'>
      <div className="about">
        <div className="ed">
          <h1 className='heading'>Educational Details:</h1>
            <div className="edheading">
              <h3 className='program'>Program</h3>
              <h3 className='ins'>Institute</h3>
              <h3 className='year'>Year</h3>
              <h3 className='cgpa'>%/CGPA</h3>
            </div>
            <div className="eddetails">
              <p className='program'>Bachelor of Technology</p>
              <p className='ins'>IIT Tirupati</p>
              <p className='year'>2025</p>
              <p className='cgpa'>7.28</p>
            </div>
            <div className="eddetails1">
              <p className='program'>Senior Secondary Education</p>
              <p className='ins'>Bhashyam Junior Collage</p>
              <p className='year'>2021</p>
              <p className='cgpa'>93.3%</p>
            </div>
            <div className="eddetails2">
              <p className='program'>junior Secondary Education</p>
              <p className='ins'>ViswaBharathi EM High School</p>
              <p className='year'>2019</p>
              <p className='cgpa'>9.7/10</p>
            </div>
        </div>
        <div className="interest">
          <h1 className='heading'>Area of Interest:</h1>
          <p> Web Development & Design, Android App Development, Data Structures and Algorithms.</p>
        </div>
        <div className="tech">
          <h1 className='heading'>Technical Skills:</h1>
          <div className='list'>
            <h3>Operating Systems:</h3>
            <p>Windows, Linux</p>
          </div>
          <div className='list'>
            <h3>Programming Languages:</h3>
            <p>C++, java</p>
          </div>
          <div className='list'>
            <h3>Web Development:</h3>
            <p> HTML, CSS, React, Javascript, NodeJS, ExpressJS, MongoDB</p>
          </div>
          <div className='list'>
            <h3>App Development:</h3>
            <p>Java, xml</p>
          </div>
          <div className='list'>
            <h3>Tools:</h3>
            <p> Git, Visual Studio code, Android Studio, IntelliJ</p>
          </div>
        </div>
        <div className="courses">
          <h1 className='heading'>Relavent Courses:</h1>
          <p> Introduction to programming,  Data Structures and Algorithms,  Programming Methodology,  Software Engineering
,  Design and Analysis Of Algorithms,  Theory of Computation,  Discrete Mathematics for Computer science,  Getting started with Competitive Programming,  Computer Organisation, Operating Systems,  Computer Networks,  Database Management Systems,  Artificial Intelligence.</p>
        </div>
        <div className="achi">
          <h1 className='heading'>Achievements:</h1>
          <p> 5 Star in C++ and Java, 3 Star in problem solving in hackerrank.</p>
        </div>
        <div className="extra">
          <h1 className='heading'>Extra Curricular Activities:</h1>
          <p> Cricket, Kabaddi, Batminton, Athletics.</p>
        </div>
        <div className="hobbies">
          <h1 className='heading'>Hobbies:</h1>
          <p>Listening to music, watching movies and watching cricket.</p>
        </div>
      </div>
    </div>
  )
}

export default About
