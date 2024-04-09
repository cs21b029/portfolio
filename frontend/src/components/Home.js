import React from 'react'
import '../styles/Home.css'
import pic from '../assets/passportphoto.jpg'
const Home = () => {
  return (
    <div className="home">
        <div className="homecontent">
            <div className="me">
                <div className="mydetails">
                    <h1>Full Stack Developer</h1>
                    <p>Hi! I am a Full Stack Developer with experience in building web applications using React, Node.js, Express.js, and MongoDB. I am passionate about learning new technologies and building applications that solve real-world problems. I am currently looking for full-time opportunities as a Full Stack Developer.</p>
                    <div className="socials">
                        <a href="https://github.com/cs21b029">GitHub</a>
                    </div>
                </div>
                <div className="mypic">
                    <div className="xyx">
                        <img src={pic} alt="pic" />
                    </div>
                </div>
            </div>
            <div className="techstack">
                <div className="text">Tech Stack |</div>
                <div className="icons">
                    <div className="icon">
                        <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
                        <p>React</p>
                    </div>
                    <div className="icon">
                        <img src="https://img.icons8.com/color/48/000000/html-5.png"/>
                        <p>HTML</p>
                    </div>
                    <div className="icon">
                        <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                        <p>CSS</p>
                    </div>
                    <div className="icon">
                        <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="icon">
                        <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
                        <p>Node.js</p>
                    </div>
                    <div className="icon">
                        <img src="https://img.icons8.com/ios/50/express-js.png"/>
                        <p>Express.js</p>
                    </div>
                    <div className="icon">
                        <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
