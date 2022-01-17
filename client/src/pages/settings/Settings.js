import './settings.css'
import { userContext } from '../../context/Context';
import { useContext, useState } from 'react';
import axios from 'axios';

function Settings() {
    const { user, dispatch } = useContext(userContext);
    console.log(user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState('');

    console.log(file);
    //delete user accout
    async function handleDelete() {
        try {
            const res = await axios.delete(process.env.REACT_APP_API_URL + `/users/${user._id}`, {
                data: {
                    userId: user._id,
                    username: user.username,
                }
            });
            dispatch({ type: 'LOGIN_OUT' });
            console.log(res);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    //update user info
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const updatedUser = {
                userId: user._id,
                username: username,
                password,
                email,
            };
            //check if user upload image
            if (file) {
                const fd = new FormData();
                const filename = Date.now() + file.name;
                fd.append('name', filename);
                fd.append('file', file);
                try {
                    const res = await axios.post(process.env.REACT_APP_API_URL + `/upload`, fd);
                    updatedUser.profilePic = filename;
                } catch (err) {
                    console.log(err);
                }
            }
            console.log(updatedUser);
            const res = await axios.put(process.env.REACT_APP_API_URL + `/users/${user._id}`, updatedUser);
            console.log('updateduser', res.data);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
            window.location.reload();
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
                        {
                            user?.profilePic ?
                                <img
                                    className='settingsImg'
                                    src={process.env.REACT_APP_API_IMAGE + `/${user.profilePic}`}
                                    alt=""
                                /> :
                                <img
                                    className='settingsImg'
                                    src="images/profile.jpeg"
                                    alt=""
                                />
                        }

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
