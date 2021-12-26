import { useState } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { answerQuestion } from '../actions/questions';

function QuestionContent(props) {
    const [answer, setAnswer] = useState('');
    const submitAnswer = () => {
        if(answer !== '') {
            props.dispatch(answerQuestion({
                authedUser: props.authedUser,
                qid: props.qid,
                answer
            }));
        }
    }
    return (
    <div className='question-content'>
        <h2 className='would-you'>Would you rather ...</h2>
        <div onChange={(e) => {setAnswer(e.target.value)}}>
            <input id='option1' type='radio' name='option' value={'optionOne'}/>
            <label htmlFor='option1' style={{fontWeight: '550'}}>{props.optionOne.text}</label>
            <br/>
            <input id='option2' type='radio' name='option' value={'optionTwo'}/>
            <label htmlFor='option2' style={{fontWeight: '550'}}>{props.optionTwo.text}</label>
            <button className='button' onClick={() => submitAnswer()}>Submit</button>
        </div>
    </div>
    );
}

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionContent);