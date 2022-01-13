import './post.css'

function Post() {
    return (
        <div className='post'>
            <div className='imgWrapper'>
                <img
                    className='postImg'
                    src="https://images.pexels.com/photos/7651006/pexels-photo-7651006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="" />
            </div>

            <div className="postInfo">

                <div className='postInfoLineOne'>
                    <span className="postTitle">
                        Lorem ipsum dolor sit
                    </span>

                    <div className="postCats">
                        <span className="postCat">Music</span>
                        <span className="postCat">Life</span>
                    </div>
                </div>

                <hr />

                <p className="postDes">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, blanditiis? Harum quae, molestias, perferendis ex mollitia ipsam repudiandae obcaecati quas officiis atque consectetur architecto veritatis tempore, recusandae cupiditate aspernatur perspiciatis!
                </p>

                <span className="postDate">1 hour ago</span>
            </div>

        </div>
    )
}

export default Post
