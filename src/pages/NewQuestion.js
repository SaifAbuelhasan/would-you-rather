import { useState } from 'react';
import { connect } from 'react-redux';
import { askQuestion } from '../actions/questions';
import { useNavigate } from "react-router-dom";
import '../App.css';

function NewQuestion({ authedUser, dispatch }) {
  let navigate = useNavigate();
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const submitQuestion = () => {
    if(optionOne.trim() !== '' && optionTwo.trim() !== '') {
      dispatch(askQuestion({ optionOneText:optionOne, optionTwoText:optionTwo, author:authedUser }));
      navigate('/');
    }
  }
  return (
    <div className='new-question-container'>
      <div className='new-question-header'>
        <h2>Create New Question</h2>
      </div>
      <div className='new-question-form'>
        <h3 style={{marginBottom: '0'}}>Would you rather ...</h3>
        <input type='text' className='add-option' placeholder='Enter Option One Text Here' onChange={(e) => {setOptionOne(e.target.value)}}/>
        <div className='separation'>OR</div>
        <input type='text' className='add-option' placeholder='Enter Option Two Text Here' onChange={(e) => {setOptionTwo(e.target.value)}}/>
        <button className='button' onClick={() => {submitQuestion()}}>Submit</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion);