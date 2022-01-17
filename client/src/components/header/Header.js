import './header.css'

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                {/* <span className="headerTitleSm">React & Node</span> */}
                <span className="headerTitleLg">Blog</span>
            </div>
            <div>

            </div>
            <div
                className="headerImg" 
                src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
            ></div>
        </div>
    )
}

export default Header
