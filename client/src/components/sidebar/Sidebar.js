import axios from 'axios'
import { useEffect, useState } from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom';

function Sidebar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            //fetch all categories
            const response = await axios.get('/categories');
            setCategories(response.data);
        }
        fetch();
    }, [])

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
                    {categories.map((cat, index) =>
                        <Link to={`/?cat=${cat.name}`} className='link'>
                            <li className="sidebarListItem" key={index}>{cat.name}</li>
                        </Link>
                    )}
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
