import './register.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/register', {
                username: username,
                email: email,
                password: password,
            })
            res.data && navigate('/login');
        } catch (err) {
            console.log(err);
            setErr(true);
        }
    }

    return (
        <div className='login'>
            <span className='loginTitle'>Register</span>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label><b>Username</b></label>
                <input
                    type="text"
                    placeholder="Enter your username..."
                    className='loginFormInput'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter your email..."
                    className='loginFormInput'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter your password..."
                    className='loginFormInput'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type='submit'
                    className='registerSubmit'
                >Register</button>
            </form>
            {err && <h3 style={{marginTop:'20px', color:'red'}}>Please try another username!</h3>}
        </div>
    )
}

export default Login
