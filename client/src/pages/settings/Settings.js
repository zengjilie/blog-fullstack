import './settings.css'
import { userContext } from '../../context/Context';
import { useContext } from 'react';
function Settings() {
    const { user } = useContext(userContext);
    console.log(user);

    //delete user accout
    
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className="settingsTitle">
                    <div className="settingsUpdateTitle">Update Account</div>
                    <div className="settingsDeleteTitle">Delete Account</div>
                </div>
                <div style={{ width: "100%", height: "2px", backgroundColor: "#dfebe5", marginBottom: "20px" }}></div>
                <form className='settingsForm'>
                    <label>Your Profile</label>
                    <div className="settingsProfile">
                        {
                            user?.profilePic ?
                                <img
                                    className='settingsImg'
                                    src={process.env.REACT_APP_API_URL + `/images/${user.profilePic}`}
                                    alt=""
                                />:
                                <img
                                    className='settingsImg'
                                    src="images/profile.jpeg"
                                    alt=""
                                />
                        }

                        <label className='settingsUploadImage' htmlFor="fileInput">
                            <span >Upload Image</span>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>

                    <label>Username</label>
                    <input type="text" placeholder='Username...' className='settingInput' />
                    <label>Email</label>
                    <input type="text" placeholder='Email...' className='settingInput'/>
                    <label>Password</label>
                    <input type="text" placeholder='Password...' className='settingInput'/>

                    <button className="settingsSubmit">Update</button>
                </form>

            </div>

        </div>
    )
}

export default Settings
