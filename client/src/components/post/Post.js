import './post.css'
import { Link } from 'react-router-dom';

function Post({ post }) {
    return (
        <div className='post'>
            <Link to={`/post/${post._id}`}>
                <div className='imgWrapper'>
                    {post?.photo ?
                        <img
                            className='postImg'
                            src={process.env.REACT_APP_API_IMAGE + `/${post?.photo}`}
                            alt="" /> :
                        <img
                            className='postImg'
                            src="https://images.pexels.com/photos/7651006/pexels-photo-7651006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="" />
                    }
                </div>
            </Link>

            <div className="postInfo">

                <div className='postInfoLineOne'>
                    <Link className="postTitle" to={`/post/${post._id}`}>
                        <span>
                            {post?.title}
                        </span>
                    </Link>
                    <div className="postCats">
                        {post?.categories.map((cat, index) =>
                            <span key={index} className="postCat">{cat}</span>
                        )}
                    </div>
                </div>

                <hr />

                <p className="postDes">
                    {post?.desc}
                    </p>

                <span className="postDate">{new Date(post?.createdAt).toDateString()}</span>
            </div>

        </div>
    )
}

export default Post
