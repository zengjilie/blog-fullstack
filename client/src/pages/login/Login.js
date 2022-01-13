import './login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <span className='loginTitle'>Welcome back</span>
            <form className='loginForm'>
                <label><b>Email</b></label>
                <input type="text" placeholder="Enter your email..." className='loginFormInput' />
                <label><b>Password</b></label>
                <input type="text" placeholder="Enter your password..." className='loginFormInput' />
                <button type='submit'>Login</button>
            </form>
            <Link to="/register">
                <button className='loginRegister'>Register</button>
            </Link>
        </div>
    )
}

export default Login
