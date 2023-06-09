# Team Intergalactic Presents: Intergalactic Planetary

<p>A full-stack application which teaches students about our solar system.  The Homepage lets the user flip through all the planets within the solar system (which includes Pluto), gives the user other resources to extend their knowledge (we recommend checking out the solar system rap!), and a few fun facts about our solar system.  </p>
<p>The planet cards on the home page have a 'Learn more' section where the user is directed to the individual page for that planet.  The planet cards also have a locate button and when selected the planet is located on the solar system within the banner on the homepage.</p>
<p>Each planet has it's own planet page.  The planet page includes basic information about the planet, 3 identifying facts on the specific planet, and the moons for the specific planet.  Up to 10 moons for each planet are shown with the name of the moon, the size, and the name history for that moon.</p>
<p>The application if fully responsive in mobile, tablet, and desktop.</p>
<p>The project is a week long hackathon with a team consisting of three developers who came together through the Hackathon discord channel, wireframed an idea, planned tickets/tasks through a Trello board, and communicated daily via Discord. </p>

## Created by Team Intergalactic 🚀

- <a href="https://github.com/guyfarley" target="_blank">Guy Farley</a>
- <a href="https://github.com/revyrob" target="_blank">Kayle Robson</a>
- <a href="https://github.com/madxb98" target="_blank">Madison Brown </a>

## Hackathon Parameters

This application was developed for a Dear Junior Dev Hackathon, between March 24 and April 2, 2023. Requirements:

**Frontend:**

- Each planet of the solar system must have its own profile page.
- Each page must include at a minimum (Name of the planet, size, distance from the Sun, three identifying facts, solid or gas core, and a visual representation of the planet)
- ***NOTE:*** *No images, assets, emojis, or SVGs are permitted. The visual representation of each planet must be made ENTIRELY out of CSS.*
- If the planet has a moon, you must display the following information for every moon (Name, history behind name, and size).
- Planet pages must include at least two different component styles.
- If a planet has more than one moon, the moon information must be displayed in repeating elements.
- All planet and moon content MUST be stored in a database.

**Backend:**

- You must use foreign keys.
- Planets and Moons must be stored separate from one another.
- You must incorporate one ENUM for the planet data.
- ENUM used for the planet data is the type of planet: dwarf planet, ice, terrestrial, gas

**Homepage:**

- The homepage should be an overview of the solar system.
- The data included will be up to each team.
- The homepage must include at least two components that are NOT used on any planet page.
- Homepage content does not need to be stored in a database and can be coded into your components.

## Planning and Preparation Documentation

### 🖊️ Wireframe

<a href="https://www.figma.com/file/SKLo9xQkuOUE3LnJN2Jczx/SolarSystemHackathon?node-id=0%3A1&t=TJt5GIPi0GyAOFmV-1" target="_blank">WireFrame</a>

### 📝 Trello board for tickets/tasks

<a href="https://trello.com/b/HAw11w0p/quackathon" target="_blank">Ticket board</a>

## 📸 Visual Presentation

![galaticgif](https://user-images.githubusercontent.com/66695865/229334794-a15d6902-6e5a-4317-98a5-fbb3de0197aa.gif)

## Deployed Site

<p>We deployed using Netlify and Heroku</p>
<p>Check it out 👉 <a href="https://intergalactic-planetary.netlify.app/" target="_blank">HERE</a></p>

## ⚒️ Tools Used

- React
- Express
- Axios
- Sass
- MUI
- MySQL
- AWS

## 👩‍💻 Local Installation : Frontend

To install and run locally, you may follow these steps:

1. To start using this app you first need to clone the repository: `git clone git@github.com:guyfarley/solar-system-frontend.git`

2. Then you will need to install all the required packages for the application. Run this command (if you're using npm): `npm i`

3. Run the frontend by the following command `npm start`

4. Create a .env file in the root folder and add the following to the file: REACT_APP_SERVER = <http://localhost:8080/>

5. Clone and run the backend by going to the following repo: <https://github.com/guyfarley/solar-system-backend>

6. Following the `README` file within the backend repo to clone and run the backend.

## 🔨 Things to Work On

- Getting the Solar System Banner in mobile to move around on touch so the user can see all the planets

## Backend Deployment

- As of May 4, 2023 the server and database deployments have been taken offline to save cost. Our frontend code has been refactored to pull data from an internal data file (src/planet-data.js) instead.
- As proof that the application was designed to work with our external server and database, we took the following screenshots for documentation before re-deploying the current frontend:

### MySQL Database hosted on Amazon RDS

![Amazon RDS Instance](./src/assets/images/aws_1.png)

![Amazon RDS Instance 2](./src/assets/images/aws_2.png)

### Server Deployed on Heroku

![Heroku Deployed Server](./src/assets/images/heroku_3.png)

### JSON Data Received from "/" Route

![JSON Data Received from Slash Route](./src/assets/images/heroku_1.png)

### JSON Data Received from "/planet/[planet_id]" Route

![JSON Data Received from Planet Route](./src/assets/images/heroku_2.png)
