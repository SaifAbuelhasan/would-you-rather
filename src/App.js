import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import NewQuestion from './pages/NewQuestion';
import Navbar from './navigation/Navbar';

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  })

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/new-question' element={<NewQuestion />} />
      </Routes>
    </div>
  );
}

export default connect()(App);
