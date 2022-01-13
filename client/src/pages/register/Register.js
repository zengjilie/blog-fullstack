import './register.css'

function Login() {
    return (
        <div className='login'>
            <span className='loginTitle'>Register</span>
            <form className='loginForm'>
                <label><b>Email</b></label>
                <input type="text" placeholder="Enter your email..." className='loginFormInput' />
                <label><b>Password</b></label>
                <input type="text" placeholder="Enter your password..." className='loginFormInput' />
                <button type='submit'>Register</button>
            </form>

        </div>
    )
}

export default Login
