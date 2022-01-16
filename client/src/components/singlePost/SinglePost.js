import './singlepost.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../posts/Posts';
import { Link } from 'react-router-dom';

function SinglePost() {
    //get postid
    let postId = useParams().postId;
    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`/posts/${postId}`);
            setPost(response.data);
        }
        fetchPost();
    }, [])

    const [post, setPost] = useState(null);
    console.log(post);
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {post?.photo ?
                    <img
                        className='singlePostImg'
                        src={post?.photo}
                        alt=""
                    /> :
                    <img
                        className='singlePostImg'
                        src="https://images.pexels.com/photos/9725979/pexels-photo-9725979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                    />
                }
                <h1 className="singlePostTitle">
                    <span>{post?.title}</span>
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
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

                <p className='singlePostContent'>
                    {post?.desc}
                </p>
            </div>
        </div>
    )
}

export default SinglePost
