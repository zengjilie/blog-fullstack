import axios from 'axios'
import { useEffect, useState } from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom';

function Sidebar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            //fetch all categories
            const response = await axios.get(process.env.REACT_APP_API_URL+'/categories');
            setCategories(response.data);
        }
        fetch();
    }, [])

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORITES</span>
                <ul className="sidebarList">
                    {categories.map((cat, index) =>
                        <Link key={index} to={`/?cat=${cat?.name}`} className='link'>
                            <li className="sidebarListItem" >{cat?.name}</li>
                        </Link>
                    )}
                </ul>
            </div>


        </div>
    )
}

export default Sidebar
