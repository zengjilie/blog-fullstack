import './topbar.css';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/solid';
import { useContext } from 'react';
import { userContext } from '../../context/Context';
function Topbar() {
    const { user, dispatch } = useContext(userContext);
    return (
        <div className="top">
            <div className="topLeft">
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                    <span className='topLogo'>BLOG-XYZ</span>
                </Link>
            </div>

            <input type="checkbox" id="check" />
            <label className="topMenuWrapper" htmlFor="check"> <MenuIcon className='topMenu' style={{ height: "40px", width: "40px" }} />
            </label>

            <div className="topCenter">
                <ul className="topList">
                    <Link className="topListItem link" to="/">
                        <li >HOME</li>
                    </Link>

                    <Link className="topListItem link" to="/about" >
                        <li >ABOUT</li>
                    </Link>

                    <Link className="topListItem link" to="/write" >
                        <li >WRITE</li>
                    </Link>

                    {user ?
                        <Link className='topListItem link' to="/" onClick={() => dispatch({ type: 'LOGIN_OUT' })}>
                            <li >LOGOUT</li>
                        </Link> :
                        <Link className='topListItem link' to="/login">
                            <li >LOGIN</li>
                        </Link>
                    }
                </ul>

            </div>

            <div className="topRight">
                <Link to="/settings">
                    {user?.profilePic ?
                        <img
                            className="topImg"
                            src={process.env.REACT_APP_API_IMAGE + `/${user.profilePic}`}
                            alt="" /> :
                        <img
                            className="topImg"
                            src="/images/profile.jpeg"
                            alt="" />
                    }
                </Link>
            </div>
            <div className='backgroundBloker'></div>
        </div>
    )
}

export default Topbar
