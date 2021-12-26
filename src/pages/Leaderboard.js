import '../App.css';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import LeaderboardUser from '../components/LeaderboardUser';

function Leaderboard({ users }) {
  return (
    <ul className='leaderboard-list'>
      {
        users.map((id) => {
          return(
            <li key={id}><LeaderboardUser id={id} /></li>
          )
        })
      }
    </ul>
  );
}

const mapStateToProps = ({ users }) => {
  users = Object.keys(users).sort((a, b) => {
    return (users[a].questions.length + Object.keys(users[a]).length - users[b].questions.length + Object.keys(users[b]).length)
  })
  return {
    users
  }
}

export default connect(mapStateToProps)(Leaderboard);