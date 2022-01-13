import SinglePost from '../../components/singlePost/SinglePost'
import Sidebar from '../../components/sidebar/Sidebar'
import './single.css'

function single() {
    return (
        <div className='single'>
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default single
