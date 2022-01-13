import './write.css'

function Write() {
    return (
        <div className='write'>
            <div className=''>
                <img
                    className='writeImg'
                    src="https://images.pexels.com/photos/4331891/pexels-photo-4331891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                />
            </div>

            <form action="" className="writeForm">

                <div className='writeFormGroup'>
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                    />

                    <input
                        type="text"
                        placeholder="Title"
                        autoFocus
                        className='writeInput'
                    />
                </div>


                <div className="writeFormGroup">
                    <textarea
                        placeholder='Tell your story...'
                        type="text"
                        className='writeInput writeContent'></textarea>
                </div>

                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}

export default Write
