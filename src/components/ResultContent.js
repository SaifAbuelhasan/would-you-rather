import '../App.css';

function ResultContent({ optionOne, optionTwo, answer }) {
    const votesOne = optionOne.votes.length;
    const votesTwo = optionTwo.votes.length;
    const totalVotes = votesOne + votesTwo;
    const percentOne = ((votesOne/totalVotes)*100).toFixed(2);
    const percentTwo = ((votesTwo/totalVotes)*100).toFixed(2);
    return (
    <div className='question-content'>
        <h2 className='would-you'>Results:</h2>
        <div className='results'>
            <div className='result'>
                <p>{`Would you rather ${optionOne.text}?`}</p>
                <div className='percentage-bar'>
                    <div className='votes' style={{width: `${percentOne}%`}}>
                        {
                            percentOne >= 10
                            ?
                            <p className='percentage'>{`${percentOne}%`}</p>
                            :
                            <p className='low-percentage'>{`${percentOne}%`}</p>
                        }
                    </div>
                </div>
                <div className='votes-text'><p >{`${votesOne} out of ${totalVotes} votes`}</p></div>
                {
                    answer === 'optionOne'
                    ?
                    <div className='circle'>Your vote</div>
                    :
                    null
                }
            </div>
            <div className='result'>
                <p>{`Would you rather ${optionTwo.text}?`}</p>
                <div className='percentage-bar'>
                    <div className='votes' style={{width: `${percentTwo}%`}}>
                        {
                            percentTwo >= 10
                            ?
                            <p className='percentage'>{`${percentTwo}%`}</p>
                            :
                            <p className='low-percentage'>{`${percentTwo}%`}</p>
                        }
                    </div>
                </div>
                <div className='votes-text'><p >{`${votesTwo} out of ${totalVotes} votes`}</p></div>
                {
                    answer === 'optionTwo'
                    ?
                    <div className='circle'>Your vote</div>
                    :
                    null
                }
            </div>
        </div>
    </div>
    );
}

export default ResultContent;