import './topbar.css';
import { Link } from 'react-router-dom';

function Topbar() {

    return (
        <div className="top">
            <div className="topLeft">
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                    <span className='topLogo'>Alex's Blog</span>
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
                    <Link className="topListItem" to="/" style={{ color: "black", textDecoration: "none" }}>
                        <li >HOME</li>
                    </Link>

                    <Link className="topListItem" to="/about" style={{ color: "black", textDecoration: "none" }}>
                        <li >ABOUT</li>
                    </Link>
                    <Link className="topListItem" to="/write" style={{ color: "black", textDecoration: "none" }}>
                        <li >WRITE</li>
                    </Link>

                </ul>

            </div>

            <div className="topRight">
                <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
                    <span id="login" style={{ marginLeft: "12px" }} className="topListItem">LOGIN</span>
                </Link>
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
