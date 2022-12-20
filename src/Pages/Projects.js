
import image1 from '../pic/MyWebsite.JPG'
import image2 from '../pic/GamePic.JPG'
import image3 from '../pic/TacPic.JPG'
import image4 from '../pic/GroupProjectPicture.JPG'
import image5 from '../pic/EmployePic.png'
import image8 from '../pic/CookiePic.png'


export default function Projects() {
    return <div class = "projects">
        <div class="rightPic">
            <h1>Html Projects
                <img src={image1} alt="Website" />
                <a href="Milo_s website - Copy/HTML website.html" target="_blank">
                
                </a>
            </h1>
            <p>
                This website is a website I made back in highschool while I was in a coding class. I built this in
                Notepad ++.
                https://domomyles.github.io/PasswordGenerator/
            </p>
        </div>
<br></br>


        <div id="Games" class="leftPic">
            <h1>Video Games
                <img src={image2} alt="Video Game" />
            </h1>
            <p>
                This is a game I made for a class in 2017 for a project in school.
                I used GameMaker program to create this videogame over the course of 
                about two years while in a class for web development we had available
                to us in highschool called Gaming Animation Web Design.
            </p>
        </div>

        <br></br>

        <div id="WES" class="rightPic">
            <h1>Proximity
                <a href="Milo_s website - Copy/HTML website.html" target="_blank">
                    <img src={image4} alt="MapWebsite similar to google maps" />
                </a>
            </h1>
            <p>
                Description
                a location based navigation application designed to give users an alternative way to use maps. The main
                purpose of Proximity is to view the available options nearby a chosen destination. On vacation and need to
                find an ATM nearby your hotel? Traveling for work and need close access to a pharmacy? Our app will help you
                view and locate the options available to you.

                The app can be used by entering in a location in the U.S., either a general state or city, or even a
                specific address. After choosing a category (i.e. Restaurant, Bank, or Pharmacy) and clicking Search, a map
                on the right side of the screen will populate with the location and all of the nearby locations matching the
                category, within a specific distance radius in relation to the user input.

                The primary areas of code and technology that were focused are as follows:

                We used the Bulma framework to aid in our CSS organization and creation
                Through the Google Maps Platform, we utilized various APIs from Maps, Routes, and Places
                Navigated and edited extensive JavaScript code in orde r to utilized Google's Maps Platform API
                Used various pseudo variables to create custom color variables in the CSS, colors that follow a strict color
                palette that matches our project presentation
            </p>
        </div>

        <br></br>
        
        <div id="WES" class="leftPic">
            <h1>TAC
                <a href="https://enigmatic-fortress-43863.herokuapp.com/home">
                <img src={image3} alt="MapWebsite similar to google maps" />
                </a>

            </h1>
            <p>
                
                The Advertising Campaign (TAC), is a marketing webtool for administrators to promote their startup business.
                This application provides a secure login, minimalistic user interface, and a commercial email marketing
                service to send personalized emails to our customers.

                
                Our motovation was to help the potential clients to promote their business by sending beautifully designed emails to the
                subscribed customers. Importantly, users like our application.
            </p>
        </div>
        <br></br>
        <div id="WES" class="rightPic">
            <h1>Proximity
                <a href="Milo_s website - Copy/HTML website.html" target="_blank">
                    <img src={image5} alt="Workers Picture" />
                </a>
            </h1>
            <p>
            This application will allow you to create a business worker layout in a way
             where you have the manager and you can set associates of two ranks: Engineer
              and Intern. They will be displayed with their Employee id and contact 
              information. This would be great use in a small business environment.
            </p>
            https://domomyles.github.io/PasswordGenerator/
        </div>
        <br></br>
            <div id="WES" class="rightPic">
            <h1>Proximity
                <a href="Milo_s website - Copy/HTML website.html" target="_blank">
                    <img src={image5} alt="Workers Picture" />
                </a>
            </h1>
            <p>
            This application will allow you to create a business worker layout in a way
             where you have the manager and you can set associates of two ranks: Engineer
              and Intern. They will be displayed with their Employee id and contact 
              information. This would be great use in a small business environment.
            </p>
            https://domomyles.github.io/PasswordGenerator/
        </div>
        <br></br>
        <div id="WES" class="leftPic">
            <h1>Cookie Coder
                <a href="https://cookie-coder.herokuapp.com/">
                <img src={image8} alt="Cookie Coder website" />
                </a>

            </h1>
            <p>
            CookieCoder is a convenient app to store your most useful code snippets. You'll be able to copy tried and true snippets with ease and efficiency to any project

            </p>
        </div>
        <br></br>
    </div>
}
