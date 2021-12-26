import '../App.css';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import QuestionContent from '../components/QuestionContent';
import ResultContent from '../components/ResultContent';

function Poll({ questions, users, authedUser }) {
    const { id } = useParams();
    const question = questions[id];
    const avatarURL = users[question.author].avatarURL;
    const answered = Object.keys(authedUser.answers).includes(id);
    const answer = authedUser.answers[id]
    return (
    <div className='question'>
        <div className='who-asks'>
            {question.author} asks:
        </div>
        <img
            src={avatarURL}
            className='avatar'
        />
        {
            answered
            ?
            <ResultContent optionOne={question.optionOne} optionTwo={question.optionTwo} answer={answer}/>
            :
            <QuestionContent optionOne={question.optionOne} optionTwo={question.optionTwo} qid={id}/>
        }
    </div>
    );
}

const mapStateToProps = ({questions, users, authedUser}) => {
    authedUser = users[authedUser];
    return {
        questions,
        users,
        authedUser
    }
}

export default connect(mapStateToProps) (Poll);