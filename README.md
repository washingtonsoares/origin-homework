# Origin Frontend Take-Home Assignment

[![Netlify Status](https://api.netlify.com/api/v1/badges/cffac3a5-0aa5-4ddf-a9af-354220196b67/deploy-status)](https://app.netlify.com/sites/saving-goal/deploys)
<a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
</a>

**IMPORTANT**: you can choose any technology stack to implement this assignment. Using our stack is not a requirement in the selection process - we will consider exclusively the quality of your project (technology and product-wise) to evaluate your work. We've added a project structure in this repository (a buildwith react, redux, jest, styled-components and typescript) to save you time if you want to use it. If you prefer another stack, feel free to use it.

Origin is a platform that helps our customers' employees put their financial lives on track.

One key to financial well-being is planning & saving for your goals. Users can have many saving goals (e.g. go to college or throw a wedding party) and it is our job to help them accomplish it.

You will build a piece of our savings feature by creating the savings plan simulation screen.

### The Saving Goal Plan Simulation Screen

![Saving Goal Plan Mockup Desktop](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/saving-goal-plan-desk.png)

You will build a screen where the user will simulate saving towards the "Buy a house" savings goal.
In it, the users choose (i) the value they want to save and (ii) the date they plan to reach the goal.

When the users change the value of any of the inputs, the monthly deposit value is calculated and displayed to them.

# Development Instructions

### Evaluation

Be aware that Origin will mainly take into consideration the following evaluation criteria:

- How close your page is to the mockups, both on mobile & desktop;
- How clean and organized your code is;
- How good your automated tests are (qualitative over quantitative);
- And if you implemented the business rules correctly.

### Assets - Pay attention on the dates below

You can find the layout mockups here on our Figma project:
[Layout mockups](https://www.figma.com/file/Axdg0WSJURcxp8Arq3gg9x/Take-Home-Assignment-v2)

Once you have opened the link you must sign up and log in so you can have access to the colors, fonts, margins and assets information.

#### Money input

The money input component should:

- Allow only numbers
- Display the value formatted as money (e.g 3500.45 should be 3,500.44)

#### Date input

The date input component should:

- Allow only future dates
- When clicking on the arrow buttons it should go up and down month by month
- The users should be able to move the months by typing the Left and Right arrow key on the keyboard

#### Confirm button

You don't need to add any action on the confirmation button

# Delivery Instructions

Send us the link to your repository and make sure to make it public.

# Usage

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
