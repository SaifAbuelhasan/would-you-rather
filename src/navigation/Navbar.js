import '../App.css';
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar() {
  let { pathname } = useLocation();
  return (
    <div className='header-container'>
      <header>
        <nav className="nav">
            <ul className="nav__list">
                <li className={pathname === '/' ? `active nav__item` : `nav__item`}><Link to="/" className="nav__link">
                  Home
                </Link></li>
                <li className={pathname === '/new-question' ? `active nav__item` : `nav__item`}><Link to="/new-question" className="nav__link">
                  New question
                </Link></li>
                <li className={pathname === '/leaderboard' ? `active nav__item` : `nav__item`}><Link to="/leaderboard" className="nav__link">
                  Leaderboard
                </Link></li>
            </ul>
        </nav>
      </header>
    </div>
  );
}
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default Navbar;