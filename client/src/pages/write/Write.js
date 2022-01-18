import './write.css'
import { PlusSmIcon } from '@heroicons/react/outline';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { userContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import {TextareaAutosize} from "@mui/base";

function Write() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const { user } = useContext(userContext);
    const navigate = useNavigate();

    console.log(...categoryList.map((cat) => cat.name));
    console.log(categoryList);
    async function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            title,
            desc,
            username: user.username,
            categories: [...categoryList.map((cat) => cat.name)]
        }
        if (file) {
            const fd = new FormData();
            const filename = Date.now() + file.name;
            fd.append('name', filename);
            fd.append('file', file)
            newPost.photo = filename;
            try {
                const res = await axios.post(process.env.REACT_APP_API_URL + '/upload', fd);
            } catch (err) {
                console.log(err);
            }
            console.log(URL.createObjectURL(file));
        }
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL + '/posts', newPost);
            const res2 = await axios.post(process.env.REACT_APP_API_URL + '/categories', {data:[...categoryList]});
            navigate('/post/' + res.data._id);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='write'>
            <div className=''>
                <img
                    className='writeImg'
                    src={file && URL.createObjectURL(file)}
                    alt=""
                />
            </div>

            <form id='form1' className="writeForm" onSubmit={handleSubmit}>

                <div className='writeFormGroup'>
                    <label htmlFor="fileInput">
                        <PlusSmIcon className='writeIcon' />
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />

                    <input
                        type="text"
                        placeholder="Title"
                        autoFocus
                        className='writeInput'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>


                <div className="writeFormGroup">
                    {/* <textarea
                        placeholder='Tell your story...'
                        type="text"
                        className='writeInput writeContent'
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea> */}
                    <TextareaAutosize
                        type="text"
                        aria-label="empty textarea" 
                        placeholder="Tell your story..."
                        className='writeInput writeContent'
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
            </form>

            <div className='writeCategoryGroup'>
                <input
                    type="text"
                    className='writeCategory'
                    onChange={(e) => { setCategory(e.target.value) }}
                    placeholder='Categories...'
                    value={category}
                />
                <button
                    onClick={() => {
                        setCategoryList([...categoryList, { name: category }]);
                        setCategory('')
                    }}
                    className='writeCategoryAdd'
                >
                    Add
                </button>
                <div className='catList'>
                    {categoryList.map((cat, index) => <span key={index}>{cat.name}</span>)}
                </div>
            </div>

            <button
                type="submit"
                className='writeSubmit'
                form='form1'
            >
                Publish
            </button>
        </div>
    )
}

export default Write
