import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    // <main>
    //   <h1>Create React App + Go API Template</h1>
    //   <h2>
    //     Deployed with{' '}
    //     <a
    //       href="https://vercel.com/docs"
    //       target="_blank"
    //       rel="noreferrer noopener"
    //     >
    //       Vercel
    //     </a>
    //     !
    //   </h2>
    //   <p>
    //     <a
    //       href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
    //       target="_blank"
    //       rel="noreferrer noopener"
    //     >
    //       This project
    //     </a>{' '}
    //     was bootstrapped with{' '}
    //     <a href="https://facebook.github.io/create-react-app/">
    //       Create React App
    //     </a>{' '}
    //     and contains three directories, <code>/public</code> for static assets,{' '}
    //     <code>/src</code> for components and content, and <code>/api</code>{' '}
    //     which contains a serverless <a href="https://golang.org/">Go</a>{' '}
    //     function. See{' '}
    //     <a href="/api/date">
    //       <code>api/date</code> for the Date API with Go
    //     </a>
    //     .
    //   </p>
    //   <br />
    //   <h2>The date according to Go is:</h2>
    //   <p>{date ? date : 'Loading date...'}</p>
    // </main>
    <div>
    <div class='mainNav'>
            <ul class='navUl'>
                <li class='navLi'>
                <a href="#contact">Contact</a>
                </li>
                <li class='navLi'>
                <a href="#projects">Projects</a>
                </li>
                <li class='navLi'>
                <a href="#aboutme">About</a>
                </li>
                <li class='navLi' style="float:left">
                <a class="active">BRENDAN PRINZ</a>
                </li>
            </ul>
            </div>
        <main class="portfolioContent">
            <h3>Portfolio Page</h3>
            <h5 id="project-1">Pitch Portal</h5>
            <div class="projectList">

                <div class="item-1">
                    <a class="card">
                        <div class="thumb" style="background-image: url(https://i.imgur.com/CTeUSXY.png)"></div>
                    </a>
                </div>

                <div class="item-2">
                    <a class="card">
                        <div class="thumb" style="background-image: url(https://i.imgur.com/M46rMIz.png)"></div>
                    </a>
                </div>
            </div>

            <section>
                <a href='/#indexItem-0' class="portButton" type="button">Back Home</a>
            </section>
            <h5>Summary</h5>
            <p>Pitch Portal is a web application built from scratch for Origin Code Academy. I worked on this project in a group
                of 5 people over a 3-week period. The purpose of Pitch Portal is to give Origin Code Academy a dashboard
                for prospective companies looking to assign projects to students.
            </p>
            <p>The application leads new users to a sign up page where they will be prompted to fill out a form to make a new
                account.
            </p>
            <p>The new user will then be led to the Pitch Form, where they will share details about their project proposal.
            </p>
            <p>The client can then check the status of their project by logging in to see if it has been approved by an admin
                or if they need to make changes</p>
            <br />
            <p>TOOLS TO BUILD</p>
            <p>Front-End: React/Redux</p>
            <p>We used react/redux on the frontend which allowed us to easily share and make changes to data throughout our
                components.
            </p>
            <p>Back-End: MongoDb and Loopback</p>
            <p>The loopback server and interface in combination with MongoDb was used to create our database to save our users,
                projects, and project comments.
            </p>
            <p>Styling: CSS and Bootstrap
            </p>
            <p>
                The bootstrap CSS framework was very helpful to quickly build out our components. CSS was used at the end to fine tune the
                styling to give it a more polished and professional look.
            </p>
            <br />
            <p>Building the Authentication and Form Validation
            </p>
            <p>My first task was to build the user authentication and form validation. User authentication was new to me and
                I had to research how to successfully set up the user login using the loopback server. I set up the login
                page to dispatch the user’s login credentials on submission to the loopback server where I set up a post
                request to reach the server’s login endpoint. When the correct credentials were sent an access token and
                user ID was sent back as a response to the server request, which confirmed the user was successfully logged
                in. A redirection was set to check the redux store for the access token and redirects the user to the company
                dashboard where a get request using the user’s ID would then return the data needed to display for the various
                site features.
            </p>
            <br />
            <p>Pitch Detail Page
            </p>
            <p>I worked closely with the pitch detail page, which had a view for the client as well as a special view available
                for an admin. One challenge I faced was finding a way to not only render the user’s project data, but also
                to allow the user to edit that data and save their changes. When the user saves their changes I set up a
                patch request that will update the database on a user submission. I also had the changes saved in the redux
                store which would then immediately render those changes to the screen through props without having to make
                another request to the database to display them. I was also able to render a special admin view that included
                buttons to approve or deny a project admin. I achieved this by utilizing a conditional statement that checked
                if the user accessing the page had the matching ID of the admin.
            </p>
            <br />
            <p>Agile and Git Workflow
            </p>
            <p>Working on this project gave me great experience on learning how to code with a team using the agile workflow.
                The agile workflow was a great way to hold ourselves accountable as it broke the work into specific subtasks
                with how long each task would be anticipated to take. It helped our team prioritize work by making a timeline
                of what features where dependent on the completion of others before they could be worked on and helped evenly
                divide up the work. I also learned a lot about git workflow and handling merge conflicts during a rebase.
                When we were merging our code together, one challenge was to make sure that everyone’s changes were safe
                and not overridden. The merge conflict tool used in Visual Studio showed all conflicting sections of code
                and gave us the opportunity to select one or the other or change the code to something new.
            </p>

            <h5 id="project-2">Movie Finder</h5>
            <div class="projectList">

                <div class="item-1">
                    <a class="card">
                        <div class="thumb" style="background-image: url(https://i.imgur.com/F0iavWL.png)"></div>
                    </a>
                </div>

                <div class="item-2">
                    <a class="card">
                        <div class="thumb" style="background-image: url(https://i.imgur.com/VOHc1hD.png)"></div>
                    </a>
                </div>
            </div>
            <section>
                <a href='/#indexItem-1' class="portButton" type="button">Back Home</a>
                <a href='https://bp-reduxmoviefinder.herokuapp.com/' class="portButton" type="button">View Project</a>
            </section>
            <div>
                <h5>Summary</h5>
                <p>
                    Movie finder was a fun project that was built as part of my learning of Redux and React Router. The app allows users to search
                    a name of a movie they are interested in and select a movie from the search results to view more details.
                </p>
                <br />
                <p>Tools to Build:</p>
                <ul class='tools'>
                    <li class='toolName'>React/Redux</li>
                    <li class='toolName'>React Router</li>
                    <li class='toolName'>Open Movie Database API (OMDb)</li>
                    <li class='toolName'>Bootstrap</li>
                </ul>
                <br />
                <p>
                    The Movie Search
                </p>
                <p>
                    To display a list of the user’s movie search results I made an axios call to the movie search API endpoint. Unfortunately,
                    the search results would only return limited data on each movie. I needed to display more details for
                    each movie when it was selected. To make that work I had to make a second axios request searching by
                    the specific movie ID that was given in the initial movie search response. I then got a response with
                    much more detailed movie information that could then be displayed on the movie detail page.
                </p>
                <br />
                <p>
                    What I Learned
                </p>
                <p>
                    This project gave me a deeper understanding of how React Redux worked and how useful it is to be able to save data to the
                    store to be used throughout the application. I also became a lot more comfortable making axios requests
                    to an api and how to manipulate the response data.
                </p>
            </div>

            <h5 id="project-3">Formula 1 Circuit Finder</h5>
            <div class="projectList">

                <div class="item-1">
                    <a class="card">
                        <div class="thumb" style="background-image: url(https://i.imgur.com/R0HuxK1.png)"></div>
                    </a>
                </div>

                <div class="item-2">
                    <a class="card">
                        <div class="thumb" style="background-image: url(https://i.imgur.com/okBgrSJ.png)"></div>
                    </a>
                </div>
            </div>
            <section>
                <a href='/#indexItem-2' class="portButton" type="button">Back Home</a>
                <a href='https://bp-f1circuitfinder.herokuapp.com/' class="portButton" type="button">View Project</a>
            </section>
            <div>
                <h5>Summary</h5>
                <p>The main criteria for this project was to utilize two different API’s of my choice and have them interact
                    with one another. I am an avid motorsports fan and was excited to see there was a Formula 1 racing API.
                    I decided to use the Ergast Formula 1 API in combination with the google maps API to let a user choose
                    from a list of racetracks on the 2017 circuit and have google maps display on a map where the track was
                    located. A great feature of the google maps API was many of the race tracks had street view where you
                    could virtually tour the track.
                </p>
                <br />
                <p>Tools to Build:</p>
                <ul class='tools'>
                    <li class='toolName'>React</li>
                    <li class='toolName'>Ergast Formula 1 API</li>
                    <li class='toolName'>Google Maps React API</li>
                    <li class='toolName'>Bootstrap</li>
                </ul>
                <br />
                <p>Using 2 API's</p>
                <p>
                    One of the biggest challenges was getting the project started by finding two usable API’s that I found interesting and was
                    able to freely use. Some API’s that I found either required payment or a more involved process such as
                    an application submittal for further review. The Ergast Formula 1 API was very accessible by making a
                    get request to the proper endpoint. The Google Maps React API was a little more involved but I learned
                    how to generate my own api key and use it for my requests.
                </p>
                <p>
                    The Ergast response data had details on the tracks including the latitude and longitude which I was then able to pass as
                    props into the google maps api to display the track location on the map. The user can then take a closer
                    look at the track location and the surrounding area.
                </p>
            </div>


            <h5 id="project-4">Redux Weather App</h5>
            <div class="projectList">

                <div class="item-1">
                    <a class="card">
                        <div class="thumb" style="background-image: url(https://i.imgur.com/h0HZD6F.png)"></div>
                    </a>
                </div>
            </div>
            <section>
                <a href='/#indexItem-3' class="portButton" type="button">Back Home</a>
                <a href='https://bp-weatherapp.herokuapp.com/' class="portButton" type="button">View Project</a>
            </section>
            <div>
                <h5>
                    Summary
                </h5>
                <p>I have always enjoyed weather app’s so this was an exciting project for me to take on to learn how to make
                    my own that displays real time weather data. This project was my introduction to using Redux and its
                    more involved state management system beyond React. The app had a simple user interface where a user
                    can type in a city name and have real time weather displayed to the screen while keeping a list of previously
                    searched cities.
                </p>
                <br />
                <p>Tools to Build</p>
                <ul class='tools'>
                    <li class='toolName'>React/Redux</li>
                    <li class='toolName'>React Router </li>
                    <li class='toolName'>Open Weather Map API</li>
                    <li class='toolName'>Bootstrap</li>
                </ul>
                <br />
                <p>Displaying Weather Data</p>
                <p>Since this was my first project using redux I had to learn how to dispatch a city name from the search results
                    to the redux store where it could be passed as props to other components. Understanding the more involved
                    state management system was a challenge at first. Once I set up an axios request to receive a city name
                    on user submission it could then make a get request to the Open Weather Map API and received the city’s
                    weather data as a response. I made an export function in my actions file that then sent the weather data
                    to the reducer file and finally exported from the reducer to the root store. Once the data was available
                    in the root store it was then available to be passed as props using connect where my components were
                    ready to receive the new information once it became available.
                </p>
                <p>
                    I learned what a useful tool redux was even though it seemed at first to be like react with more complicated steps. Seeing
                    how I could easily access previous states once my components were connected correctly was a great learning
                    experience.

                </p>

            </div>

        </main>

    </div>
  );
}

export default App;
