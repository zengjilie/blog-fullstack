import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    useEffect(() => {
        const fetch = async () => {
            //fetch all existing posts
            const res = await axios.get(process.env.REACT_APP_API_URL + '/posts');
            setPosts(res.data);
        }
        fetch();
    }, [])
    return (
        <div>
            <Header />
            <div className='home'>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </div>
    )
}

export default Home
