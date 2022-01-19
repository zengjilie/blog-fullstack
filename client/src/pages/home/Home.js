import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    const sp = new URLSearchParams(search);

    useEffect(() => {
        //query string user/cat/all
        if (sp.has('user')) {
            const fetch = async () => {
                try {
                    const res = await axios.get(process.env.REACT_APP_API_URL + `/posts?user=${sp.get('user')}`);
                    setPosts(res.data);
                } catch (err) {
                    console.log(err);
                }
            }
            fetch();
        } else if (sp.has('cat')) {
            console.log('cat',sp.get('cat'));
            const fetch = async () => {
                try {
                    const res = await axios.get(process.env.REACT_APP_API_URL + `/posts?cat=${sp.get('cat')}`);
                    setPosts(res.data);
                } catch (err) {
                    console.log(err);
                }
            }
            fetch();
        } else {
            const fetch = async () => {
                try {
                    const res = await axios.get(process.env.REACT_APP_API_URL + '/posts');
                    setPosts(res.data);
                } catch (err) {
                    console.log(err);
                }
            }
            fetch();
        }
    }, [search])

    return (
        <>
            <Header />
            <div className='home'>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
