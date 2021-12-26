# Would You Rather Project

A website to play the would you rather game. You can login with different users, ask questions, answer polls and see your position on the leaderboard.

## Starting the project

To get started:

* install all project dependencies with `yarn install`
* start the development server with `yarn start`


## Files
```bash
├── README.md - This file.
├── draft.md
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── pages
    │   ├── Home.js # Homepage component.
    │   ├── Login.js # Pick a user.
    │   ├── NewQuestion.js # Contains the form for asking new question.
    │   ├── Poll.js # Allows user to answer question, or show question details if already answered.
    │   └── Leaderboard.js # Shows all users with their respective scores
    ├── navigation
    │   ├── Navbar.css # Navbar styles.
    │   └── Navbar.js
    ├── actions
    │   ├── authedUser.js 
    │   ├── questions.js 
    │   ├── shared.js 
    │   ├── users.js 
    │   └── loading.js
    ├── reducers
    │   ├── authedUser.js
    │   ├── questions.js 
    │   ├── index.js 
    │   ├── users.js 
    │   └── loading.js
    ├── middleware
    │   ├── logger.js
    │   └── index.js
    ├── components
    │   ├── Question.js # Question Component. --> Home.js
    │   ├── LeaderboardUser.js # Leaderboard entry. --> Leaderboard.js
    │   ├── ResultContent.js # Shows Question details--> Poll.js
    │   └── QuestionContent.js # Allows user to answer question.--> Poll.js
    ├── backend
    │   └── DATA.js # Contains data to be fetched
    ├── App.css # Styles for the app.
    ├── App.js # Root.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── index.css # Global styles.
    └── index.js # DOM rendering
