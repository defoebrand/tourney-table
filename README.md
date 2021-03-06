# Tournament Table

> This project is a coding challenge set forth by tgLab. The task is to create a sports tournament resulting tool with a score table. It has been implemented using React and is deployed on Netlify.

![screenshot](public/screenshot1.png)

![screenshot](public/screenshot2.png)

## Project Description
The system should be able to add as many teams as needed, initially starting with none. Upon creation, new teams should be added at the bottom of the table and automatically paired with other teams (all teams should play one game with every other team). Teams get 3 points for a win, 1 point for a draw, and 0 points for a loss. The table should be ordered according to total points.

### Features

-   Simple to use team creation, just type in a team name and press Enter or click 'Add Team'
-   Easy to read tournament ranking table
-   Table shifts to update team ranking
-   Table accounts for tied positions
-   Fully responsive table, Win / Draw / Loss columns disappear on smaller screen sizes
-   Clear display of individual game outcomes
-   Easy to input game scores, simply type the score into the empty box and press Enter. Once both scores have been entered, the game will be saved and the table will be updated.

## Built With

-   Ubuntu
-   Atom
-   HTML / SCSS / JavaScript / React

## Live Demo
[![Netlify Status](https://api.netlify.com/api/v1/badges/f0577a9f-a3dc-4275-b448-64828bea7e82/deploy-status)](https://app.netlify.com/sites/tourney-table/deploys)

Click the [Live Link](https://tourney-table.netlify.app/) to visit this site now!

## Getting Started Locally

### Prerequisites
To get this project up and running locally, you must have node and npm installed on your computer.

**To get this project set up on your local machine, follow these simple steps:**

**Step 1**<br>
Navigate to the local folder where you want the repository to be cloned and run
`git clone https://github.com/defoebrand/tourney-table.git`.<br>

**Step 2**<br>
Next, run `cd tourney-table`.<br>

**Step 3**<br>
Next, run `npm install` to ensure all necessary dependencies are available.<br>

**Step 4**<br>
Run `npm start` to begin the server.<br>

**Step 5**<br>
Navigate to `http://localhost:3000/` in a browser of your choice to see the application running.<br>

### Testing
This project uses React Testing Library and Jest-Dom for testing.
> To run tests open a terminal inside the project's root directory and enter `npm test`

## Author

???? **Brandon Defoe**

-   Github: [@defoebrand](https://github.com/defoebrand)
-   LinkedIn: [@defoebrand](https://www.linkedin.com/in/defoebrand/)

## Show your support

Give a ?????? if you like this project!

## Acknowledgments

-   tgLab
