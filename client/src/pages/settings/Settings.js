import './settings.css'
import { userContext } from '../../context/Context';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Settings() {
    const { user, dispatch } = useContext(userContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState('');

    const navigate = useNavigate();
    //DELETE USER
    async function handleDelete() {
        try {
            const res = await axios.delete(process.env.REACT_APP_API_URL + `/users/${user._id}`, {
                data: {
                    userId: user._id,
                    username: user.username,
                }
            });
            dispatch({ type: 'LOGIN_OUT' });
            navigate('/settings');
        } catch (err) {
            console.log(err);
        }
    }

    //UPDATE USER
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const fd = new FormData();
            fd.append('userId', user._id);
            fd.append('username', username);
            fd.append('password', password);
            fd.append('email', email);
            fd.append('file', file);
            try {
                const res = await axios.put(process.env.REACT_APP_API_URL + `/users/${user._id}`, fd);
                dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
                navigate('/settings');
            } catch (err) {
                console.log(err);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className="settingsTitle">
                    <div className="settingsUpdateTitle">Update Account</div>
                    <button
                        onClick={handleDelete}
                        className="settingsDelete">
                        Delete Account
                    </button>
                </div>
                <div style={{ width: "100%", height: "2px", backgroundColor: "#dfebe5", marginBottom: "20px" }}></div>
                <form className='settingsForm' onSubmit={handleSubmit}>
                    <label>Your Profile</label>
                    <div className="settingsProfile">
                        <img
                            className='settingsImg'
                            alt=""
                            src={
                                user?.profilePic ?
                                    process.env.REACT_APP_API_IMAGE + `/${user.profilePic}` :
                                    file && URL.createObjectURL(file) 
                            }
                        />
                        <label className='settingsUploadImage' htmlFor="fileInput">
                            <span >Upload Image</span>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />

                    </div>

                    <label>Username</label>
                    <input
                        type="text"
                        placeholder='Username...'
                        className='settingInput'
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>Email</label>
                    <input
                        type="text"
                        placeholder='Email...'
                        className='settingInput'
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder='Password...'
                        className='settingInput'
                        onChange={(e) => setPassword(e.target.value)}
                    />


                    <button
                        type="submit"
                        className="settingsSubmit"
                    >
                        Update
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Settings
