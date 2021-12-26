import '../App.css';
import { connect } from 'react-redux';
import { useState } from 'react';
import { setAuthedUser } from '../actions/authedUser';

function Login({ userIds, users, dispatch }) {
    const [selectedUser, setSelected] = useState('');
    const handleLogin = () => {
        const user = users[selectedUser];
        if(selectedUser !== '') {
            dispatch(setAuthedUser(user.id));
        }
    }
    return (
        <div className='login'>
            <div className='login-header'>
                <h2 className='welcome-text'>Welcome to Would You Rather App!</h2>
                <p className='secondary-text'>Please sign in to continue</p>
            </div>
            <div className='login-box'>
                <h1>Sign in</h1>

                <select className='select-user' value={selectedUser} onChange={(e) => {setSelected(e.target.value)}}>
                    <option value="" disabled>Select User</option>
                    {
                        Object.keys(users).map((id) => {
                            return(
                                <option key={id} value={id}>{users[id].name}</option>
                            )
                        })
                    }
                </select>
                <button type='submit' className='button' onClick={() => {handleLogin()}}>Sign in</button>
            </div>
        </div>
    );
}

const mapStateToProps = ({ users }) => {
    return {
      usersIds: Object.keys(users),
      users
    }
  }

export default connect(mapStateToProps)(Login);