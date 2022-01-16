import './login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <span className='loginTitle'>Welcome back</span>
            <form className='loginForm'>
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter your username..." className='loginFormInput' />
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter your password..." className='loginFormInput' />
                <button type='submit' className='loginSubmit'>Login</button>
            </form>
            <Link to="/register">
                <button className='loginRegister'>Register</button>
            </Link>
        </div>
    )
}

export default Login
