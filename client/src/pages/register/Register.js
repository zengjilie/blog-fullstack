import './register.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    console.log(username, email, password);
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL + '/auth/register', {
                username: username,
                email: email,
                password: password,
            })
            console.log(res);
            res.data && navigate('/login');
        } catch (err) {
            console.log(err);
            setErr(true);
            setTimeout(() => {
                setErr(false);
            }, 2000);
        }
    }

    return (
        <div>
            <div className='register'>
                <span className='registerTitle'>Register</span>
                <form className='registerForm' onSubmit={handleSubmit}>

                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username..."
                        className='registerFormInput'
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>Email</label>
                    <input
                        type="text"
                        name='Email'
                        placeholder="Enter your email..."
                        className='registerFormInput'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name='password'
                        placeholder="Enter your password..."
                        className='registerFormInput'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className='registerSubmit'>Register</button>
                </form>
                {err && <p style={{ marginTop: "20px", color: "red" }}>User doesn't not exist</p>}
            </div>
            <div className='registerImage'></div>
        </div>
    )
}

