import './login.css';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { userContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch, isFetching } = useContext(userContext);
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        //manually dispatch, without importing actions, probably not the best way.
        dispatch({ type: 'LOGIN_START' });
        try {
            const res = await axios.post('/auth/login', {
                username,
                password,
            });
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
            navigate('/');
        } catch (err) {
            console.log(err);
            dispatch({ type: 'LOGIN_FAILURE' });
        }
    }

    return (
        <div className='login'>
            <span className='loginTitle'>Welcome back</span>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label><b>Username</b></label>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter your username..."
                    className='loginFormInput'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label><b>Password</b></label>
                <input
                    type="password"
                    name='password'
                    placeholder="Enter your password..."
                    className='loginFormInput'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type='submit'
                    className='loginSubmit'
                    disabled={isFetching}>
                    Login
                </button>
            </form>
            <Link to="/register">
                <button className='loginRegister'>Register</button>
            </Link>
        </div>
    )
}

export default Login
