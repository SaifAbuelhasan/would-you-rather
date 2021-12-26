import '../App.css';
import { connect } from 'react-redux';
import Question from '../components/Question';
import { useState } from 'react';

function Home({ answeredQuestionsIds, unansweredQuestionsIds }) {
  const [showUnanswered, setShowUnanswered] = useState(true);
  const showingUnanswered = showUnanswered ? 'showing' : '';
  const showingAnswered = !showUnanswered ? 'showing' : '';
  return (
      <div className='grid'>
        <button
        className={`${showingUnanswered} unanswered top`}
        style={{borderRight: 'solid 0.75px gray'}}
        onClick={() => {setShowUnanswered(true)}}>
          Unanswered questions
        </button>
        <button
        className={`${showingAnswered} answered top`}
        style={{borderRight: 'solid 0.75px gray'}}
        onClick={() => {setShowUnanswered(false)}}>
          Answered questions
        </button>

        <div className='questions-container'>
        <ul className='questions'>
          {
            showUnanswered
            ?
            unansweredQuestionsIds.map((id) => {
              return(
                <li key={id}><Question id={id}/></li>
              )
            })
            :
            answeredQuestionsIds.map((id) => {
              return(
                <li key={id}><Question id={id}/></li>
              )
            })
          }
        </ul>
        </div>
      </div>
  );
}

const mapStateToProps = ({ questions, authedUser, users }) => {
  const user = users[authedUser]
  const answeredQuestionsIds = Object.keys(user.answers)
    .sort((a, b) => questions[a].timestamp - questions[b].timestamp);
  
  const unansweredQuestionsIds = Object.keys(questions)
    .filter((question) => !answeredQuestionsIds.includes(question))
    .sort((a, b) => questions[a].timestamp - questions[b].timestamp);
  return {
    answeredQuestionsIds,
    unansweredQuestionsIds
  }
}

export default connect(mapStateToProps)(Home);