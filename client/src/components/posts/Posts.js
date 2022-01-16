import './posts.css'
import Post from '../post/Post'

function Posts({posts}) {
    return (
        <div className='posts'>
            {posts.map((p, index)=><Post post={p} key={index}/>)}
        </div>

    )
}

export default Posts
