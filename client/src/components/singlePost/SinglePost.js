import './singlepost.css'
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import {
    TrashIcon,
    PencilAltIcon,
} from '@heroicons/react/outline';
import { userContext } from '../../context/Context';

function SinglePost() {
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);

    //fetch username
    const { user } = useContext(userContext);
    const navigate = useNavigate();

    //fetch post data
    let postId = useParams().postId;

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_API_URL + `/posts/${postId}`);
                console.log(res);
                setPost(res.data);
                setTitle(res.data.title);
                setDesc(res.data.desc);
            } catch (err) {
                console.log(err);
            }

        }
        fetchPost();
    }, [])

    //edit post
    function handleEdit() {
        setUpdateMode(!updateMode);
    }
    //delete post
    async function handleDelete() {
        try {
            const res = await axios.delete(process.env.REACT_APP_API_URL + `/posts/${postId}`, { data: { username: user.username, photo: user.photo } });
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    async function handleUpdate() {
        try {
            const res = await axios.put(process.env.REACT_APP_API_URL + `/posts/${postId}`, {
                username: user.username,
                title,
                desc,
                photo: user.photo,
            })
            setUpdateMode(!updateMode);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {post?.photo ?
                    <img
                        className='singlePostImg'
                        src={process.env.REACT_APP_API_IMAGE + `/${post?.photo}`}
                        alt=""
                    /> :
                    <img
                        className='singlePostImg'
                        src="https://images.pexels.com/photos/9725979/pexels-photo-9725979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                    />
                }
                <h1 className="singlePostLineOne">
                    <input
                        type="text"
                        className="singlePostTitle"
                        value={title}
                        readOnly={!updateMode}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ border: updateMode && "2px solid lightgray" }}
                    />
                    {user?.username === post?.username &&
                        <div className="singlePostEdit">
                            <PencilAltIcon
                                onClick={handleEdit}
                                className='singlePostIcon' />
                            <TrashIcon
                                onClick={handleDelete}
                                className='singlePostIcon' />
                        </div>
                    }
                </h1>

                <div className="singlePostInfo" >
                    <Link to={`/user=${post?.username}`} className="link">
                        <span className="singlePostAuthor">
                            Author: <b>{post?.username}</b>
                        </span>
                    </Link>
                    <span className="singlePostDate">
                        {new Date(post?.createdAt).toDateString()}
                    </span>
                </div>
                <textarea
                    type="text"
                    className='singlePostContent'
                    value={desc}
                    readOnly={!updateMode}
                    onChange={(e) => setDesc(e.target.value)}
                    style={{
                        border: updateMode && "2px solid lightgray"
                    }}
                />
                {updateMode && <div className='singlePostUpdate' onClick={handleUpdate}>Update</div>
                }
            </div >
        </div >
    )
}

export default SinglePost
