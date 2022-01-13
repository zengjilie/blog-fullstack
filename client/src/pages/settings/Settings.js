import './settings.css'
function Settings() {
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
                        <img
                            className='settingsImg'
                            src="https://images.pexels.com/photos/10013070/pexels-photo-10013070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                        />

                        <label className='settingsUploadImage' htmlFor="fileInput">
                            <span >Upload Image</span>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>

                    <label>Username</label>
                    <input type="text" placeholder='Alex' />
                    <label>Email</label>
                    <input type="text" placeholder='Email' />
                    <label>Password</label>
                    <input type="text" placeholder='Password' />

                    <button className="settingsSubmit">Update</button>
                </form>

            </div>

        </div>
    )
}

export default Settings
