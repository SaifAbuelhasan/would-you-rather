# Components

* App -------------> getUsers, getQuestions
    * `Navbar`
        * `NavbarItem`
    * `Login`    #Pick user.
    * `Home`           #Show answered and unanswered questions
        * `Question`   #View poll -------------> saveQuestionAnswer
    * `QuestionView`   #Choose an option if unanswered. Show stats if answered
    * `NewQuestion`    #Form to ask new questions -------------> saveQuestion
    * `Leaderboard`    #Show leaderboard. 
        * `User`       #Show sum of asked and answered questions by each user (Leaderboard entry)

### Home View
* located at (`/`)
* shows all answered and unanswered questions
* each question will show
    * the author
    * Would you rather
    * the question

### Question View
* located at (`/question/id`)
* Shows individual question

### New Question View
* located at (`/new-question`)
* Question form

### 