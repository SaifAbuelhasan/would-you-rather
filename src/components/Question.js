import '../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Question({ question, avatarURL }) {
    return (
    <div className='question'>
        <div className='who-asks'>
            {question.author} asks:
        </div>
        <img
            src={avatarURL}
            className='avatar'
        />
        <div className='question-content'>
            <p className='would-you'>Would you rather</p>
            <p className='subtitle'>{question.optionOne.text}...</p>
            <Link to={`/poll/${question.id}`}><button className='button' >View Poll</button></Link>
        </div>
    </div>
    );
}

const mapStateToProps = ({questions, users}, { id }) => {
    const question = questions[id];
    const avatarURL = users[question.author].avatarURL;
    return {
        question,
        avatarURL
    }
}

export default connect(mapStateToProps) (Question);