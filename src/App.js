import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import NewQuestion from './pages/NewQuestion';
import Navbar from './navigation/Navbar';
import Login from './pages/Login';
import Poll from './pages/Poll';

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  })

  return (
    <div>
      <Navbar />
      <div className='page'>
        {
          props.loading ?
          <h1>Loading</h1>
          :
          props.authedUser === null ?
          <Login />
          :
          // 
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/new-question' element={<NewQuestion />} />
            <Route path='/poll/:id' element={<Poll />} />
          </Routes>
        }
      </div>
    </div>
  );
}

const mapStateToProps = ({ loading, authedUser }) => {
  return {
    loading,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
