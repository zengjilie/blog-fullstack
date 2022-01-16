import './write.css'
import { PlusSmIcon } from '@heroicons/react/outline';
import { useState, useContext } from 'react';
import axios from 'axios';
import { userContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

function Write() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const { user } = useContext(userContext);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            title,
            desc,
            username: user.username
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

            <form action="" className="writeForm" onSubmit={handleSubmit}>

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
                    <textarea
                        placeholder='Tell your story...'
                        type="text"
                        className='writeInput writeContent'
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}

export default Write
