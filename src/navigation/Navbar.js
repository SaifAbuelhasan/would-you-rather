import '../App.css';
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

function Navbar({ authedUser, dispatch }) {
  let { pathname } = useLocation();
  const activeClass = authedUser ? `active nav__item` : 'nav__item';
  return (
    <div className='header-container'>
      <header>
        <nav className="nav-left">
            <ul className="nav__list">
                <li className={pathname === '/' ? activeClass : `nav__item`}><Link to="/" className="nav__link">
                  Home
                </Link></li>
                <li className={pathname === '/new-question' ? activeClass : `nav__item`}><Link to="/new-question" className="nav__link">
                  New question
                </Link></li>
                <li className={pathname === '/leaderboard' ? activeClass : `nav__item`}><Link to="/leaderboard" className="nav__link">
                  Leaderboard
                </Link></li>
            </ul>
        </nav>
        <nav className='nav-right'>
            {
              authedUser ?
              <ul className="right-header">
                  <li className='hey'>
                    Hey, {authedUser.name}
                    <div style={{position: 'relative', marginLeft: '10px'}}>
                      <img className= 'header-avatar' src={authedUser.avatarURL}/>
                    </div>
                  </li>
                  <li className='nav__item'><span className='nav__link' onClick={() => {dispatch(setAuthedUser(null))}}>Logout</span></li>
              </ul>
              :
              null
            }
        </nav>
      </header>
    </div>
  );
}
const mapStateToProps = ({ authedUser, users }) => {
  authedUser = users[authedUser];
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Navbar);