import React from 'react';
import profile from '../../assets/images/Palo-Duro-Profile-Pic.jpg'

function AboutMe() {
    return(
        <div class="container col-12 justify-content-center" id= "AboutMe">
           <section class="card">
           <img alt= "Profile Picture" src={profile}></img>
                <br />
                <p>My name is Robert Hare. I am an aspiring web developer in the Dallas/Fort Worth area.
                I hold a Bachelor of Arts from Harding University in Searcy, Arkansas and Web Development Certificate from SMU.
                In addition to being a web developer, I am also an educator and public speaker, and life-long learner.
                In my spare time, I am an avid poetry connoisseur, which led me to create, host, and produce the Preaching Poetry Podcast.</p>
                <p>One of my favorite poems is "The Builders" by Henry Wadsworth Longfellow. His immortal words inspire me in my work: </p>    
                    <p>
                        <li>"Nothing useless is, or low;</li>
                        <li>Each thing in its place is best;</li>
                        <li>And what seems but idle show</li>
                        <li>Strengthens and supports the rest.</li>
                        <li>For the structure that we raise,</li>
                        <li>Time is with materials filled;</li>
                        <li>Our to-days and yesterdays</li>
                        <li>Are the blocks with which we build."</li>
                    </p>
            </section>
        </div>
    )
}

export default AboutMe;