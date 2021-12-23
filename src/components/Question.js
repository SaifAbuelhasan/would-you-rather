import '../App.css';
import { connect } from 'react-redux';

function Question({ question, avatarURL, id }) {
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
            <p className='sample'>{question.optionOne.text}...</p>
            <button className='view-button'>View Poll</button>
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