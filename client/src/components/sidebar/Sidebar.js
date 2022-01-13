import './sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://images.pexels.com/photos/9545155/pexels-photo-9545155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="" />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus delectus quam dolore deleniti quisquam, eligendi, architecto blanditiis fuga explicabo culpa voluptatem facere nihil fugit numquam reiciendis fugiat perspiciatis corporis voluptatibus!
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORITES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-dribbble-square"></i>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
