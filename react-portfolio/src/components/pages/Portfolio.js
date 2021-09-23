import React from 'react';

function Portfolio() {
    return(
        <div>
        <section class ="card">
            <div class= "container col-12 justify-content-center" id="Quote-Generator">
                <h2>Quote Generator/Translator</h2>
                <br/>
                <a href="https://hare-ball.github.io/quote_gen_translator/">
                    <img src="./Assets/images/Quote-Translator-Screengrab.png"  class="img-fluid rounded mx-auto d-block" alt="Quote Generator/Translator" id="Quote-Translator-Picture"/>
                </a>
                <br/>
                    <p>This was a project that I worked on with two other developers. We wanted to use an API to bring in a randomly generated quote and then use another API to allow the user to translate that quote into the language of their choice. We also decided to utilize local storage so that we can keep the generated quote and translation on the page if the user clicks away to the links in the nav bar or accidenatly closes the page. We have thought of a few different ways to add to this project, including visual asthetics and functionality. We toyed with adding another API to read the quote and translation to the user and other quote APIs so that it is unlikely that a user ever gets a recycled quote. Try it out! </p>
            </div>
        </section> 

        <section class ="card">
            <div class= "container col-12 justify-content-center" id="Note-Taker">
                <h2>Note Taker</h2>
                <br/>
                <a href="https://afternoon-gorge-81555.herokuapp.com/">
                    <img src="./Assets/images/Note Taker Index.png" class="img-fluid rounded mx-auto d-block" alt="Note Taker Main Page" id="Note-Taker-Index-Picture"/>
                </a>
                <br/>
                <a href="https://afternoon-gorge-81555.herokuapp.com/">
                    <img src="./Assets/images/Note Taker Notes.png" class="img-fluid rounded mx-auto d-block" alt="Note Taker Notes Page" id="Note-Taker-Notes-Picture"/>
                </a>
                <br/>
                    <p>This application uses Node and Express to create a note taking app. You can write, store, and delete notes along different API routes. The code is stored in a GitHub Repo, but is deployed on Heroku. Click on the picture to check it out!</p>
            </div>
        </section> 

        <section class ="card">
            <div class= "container col-12 justify-content-center" id="Employee-Tracker">
                <h2>Employee Database Tracker</h2>
                <br/>
                <div class="iframe-container">
                <iframe src="https://drive.google.com/file/d/1DG9LwGmjDRFYQhJkVpYHEjKjsT6n-K7N/preview" width="640" height="480" allow="autoplay"></iframe>
                </div>
                <br/>
                    <p>This is a command-line application that allows the user to manage an employee database containing characters from the TV show "Parks and Rec" as a demonstration. This application uses Node and multiple npm packages, including ascii-art-table, asciiart-logo, console.table, dotenv, express, inquirer, and mysql2. The video shows you how the Repo is structured and shows you a video of how it works since it doesn't have a front end.</p> 
                <br/>   
                    <p>Feel free to visit my <span><a href="https://github.com/Hare-Ball/Employee-Tracker-MySQL-CMS">GitHub Repo</a></span>  and install it for yourself</p> 
            </div>
        </section>
        </div> 
    )
};

export default Portfolio;