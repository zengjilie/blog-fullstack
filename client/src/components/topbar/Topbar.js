import './topbar.css';
import { Link } from 'react-router-dom';

function Topbar() {

    return (
        <div className="top">
            <div className="topLeft">
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                    <span className='topLogo'>BLOG-XYZ</span>
                </Link>
            </div>

            <input type="checkbox" id="check" />
            <label className="topMenuWrapper" htmlFor="check">
                <i
                    className="topMenu fas fa-bars">
                </i>
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

                    <Link className='topListItem link' to="/login">
                        <li >LOGIN</li>
                    </Link>
                </ul>

            </div>

            <div className="topRight">
                <Link to="/settings">
                    <img
                        className="topImg"
                        src="https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="" />
                </Link>
            </div>
            <div className='backgroundBloker'></div>
        </div>
    )
}

export default Topbar
