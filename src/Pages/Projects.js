
import GroupProjectPicture from '../pic/GroupProjectPicture.JPG'
import Image5 from '../pic/Image5.JPG'
import image6 from '../pic/image6.JPG'
import picture6 from '../pic/picture6.JPG'


export default function Projects() {
    return <h1>
        <div id="Projects" class="rightPic">
            <h1>Html Projects
                    <img src={Image5} alt="DomoFace" />
            </h1>
            <p>
                This website is a website I made back in highschool while i was in a coding class. I built this in
                Notepad ++.
                https://domomyles.github.io/PasswordGenerator/
            </p>
        </div>



        <div id="Games" class="leftPic">
            <h1>Video Games

                <img src={image6} alt="DomoFace" />


            </h1>
            <p>
                This is a game I made for a class in 2017 for a project in school.
            </p>
        </div>



        <div id="WES" class="rightPic">
            <h1>Proximity
                <a href="Milo_s website - Copy/HTML website.html" target="_blank">
                    <img src={GroupProjectPicture} alt="MapWebsite similar to google maps" />
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
                Navigated and edited extensive JavaScript code in order to utilized Google's Maps Platform API
                Used various pseudo variables to create custom color variables in the CSS, colors that follow a strict color
                palette that matches our project presentation
            </p>
        </div>



        <div id="WES" class="leftPic">
            <h1>TAC
                <a href="https://enigmatic-fortress-43863.herokuapp.com/home" target="_blank">
                    <img scr={picture6} alt="picture of desk with stuff on it" />
                </a>

            </h1>
            <p>
                Description
                The Advertising Campaign (TAC), is a marketing webtool for administrators to promote their startup business.
                This application provides a secure login, minimalistic user interface, and a commercial email marketing
                service to send personalized emails to our customers.

                Motovation
                Our motovation was to help the potential clients to promote their business by sending beautifully designed emails to the
                subscribed customers. Importantly, users like our application.
            </p>
        </div>
    </h1>

}