import '../App.css';
import { connect } from 'react-redux';
import Question from '../components/Question';

function Home({ questionsIds }) {
  return (
    <div className='home'>
      <div className='grid'>
        <button className='unanswered top' style={{borderRight: 'solid 0.75px gray'}}>Unanswered questions</button>
        <button className='answered top'>Answered questions</button>
        <div className='questions-container'>
        <ul className='questions'>
          { questionsIds.map((id) => {
            return(
              <li key={id}><Question id={id}/></li>
            )
          }) }
        </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ questions }) => {
  return {
    questionsIds: Object.keys(questions)
      .sort((a, b) => questions[a].timestamp - questions[b].timestamp)
  }
}

export default connect(mapStateToProps)(Home);