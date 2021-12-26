import '../App.css';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

function LeaderboardUser({ users, id }) {
  console.log(users)
  const user = users[id];
  return (
    <div className='leaderboard-user'>
        <img
            src={user.avatarURL}
            className='avatar'
        />
        <div className='info'>
            <h1 className='leaderboard-name'>{user.name}</h1>
            <div className='stats'>
                <div className='answered-questions'>
                    Answered questions: {Object.keys(user.answers).length}
                </div>
                <div className='created-questions'>
                    Created questions: {user.questions.length}
                </div>
            </div>
        </div>
        <div className='score'>
            <div className='score-box'>
                <div className='score-text'>Score</div>
                <div className='sum'>{Object.keys(user.answers).length + user.questions.length}</div>
            </div>
        </div>
    </div>
  );
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderboardUser);