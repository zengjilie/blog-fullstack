import './singlepost.css'

function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
                    className='singlePostImg'
                    src="https://images.pexels.com/photos/9725979/pexels-photo-9725979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                />

                <h1 className="singlePostTitle">
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eos</span>
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Alex</b>
                    </span>
                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>

                <p className='singlePostContent'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque, omnis adipisci nam mollitia, ut sint saepe nobis repellat nulla suscipit veritatis aliquam. Ut tempore illo autem ipsum delectus dolorem.
                </p>
            </div>
        </div>
    )
}

export default SinglePost
