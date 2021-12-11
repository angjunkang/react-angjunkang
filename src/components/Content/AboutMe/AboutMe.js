import DisplayPicture from "../../../images/about-me-irminrics.png"
import { useState, useEffect } from "react";
import React from "react"
//import { Waypoint } from 'react-waypoint';
import anime from 'animejs'

const AboutMe = () => {
    const animationRef = React.useRef(null);
    React.useEffect(() => {
        animationRef.current = anime.timeline({
			loop: !1,
			autoplay: !1
		}).add({
			targets: ".about .letter",
			scale: [.3, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 600,
			delay: (e, t) => 70 * (t + 1)
		}).add({
			targets: ".about .line",
			scaleX: [0, 1],
			opacity: [.5, 1],
			easing: "easeOutExpo",
			duration: 700,
			offset: "-=875",
			delay: (e, t, n) => 80 * (n - t)
		});
    }, []);

    return (
        <div id="about-me-div">
            <h1 className="about">
                <span className="text-wrapper">
                    <span className="line line1" />
                    <span className="letters">ABOUT ME</span>
                    <span className="line line2" />
                </span>
            </h1>
            <div className="row about-me-box">
                <div className="col-lg-5 col-md-12" id="about-me-picture-box">
                    <img src={DisplayPicture} alt="Jun Kang's DP" id="about-me-picture" />
                </div>
                <div className="col-lg-7 col-md-12" id="about-me-description-box">
                    <div id="about-me-description">
                        <p>Hello there, I am Jun Kang, and I grew up in Singapore. As a child, I fell in love with computer
                            games and shows that involve programming and software development. I always thought it was cool
                            to be a programmer and would imagine myself as the main character, developing a new game or
                            software that will make a big hit and change the world. This ultimately led me towards Nanyang
                            Polytechnic to pursue a Diploma in Information Technology.</p>
                        <p>With broad exposure to the computing field, I realize programming is such a powerful tool and
                            brings limitless possibilities. It has power to solve complex problems with automated solutions
                            and even to bring ideas from the brain to life. With modern libraries, coding languages, and
                            operating systems developing even as you are reading this, learning in this field is a
                            never-ending journey. This is what affirmed my deep passion and interest in the computing field.
                        </p>
                        <p>I am currently a Year 1 student at the National University of Singapore, majoring in computer
                            science. I hope to work as a software engineer or a web application developer. Feel free to
                            contact me if you would like to collaborate or discuss possibilities!</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AboutMe
