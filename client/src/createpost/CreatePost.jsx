
import React from "react";
import { useState } from "react";
import { useLocation , useNavigate } from "react-router-dom";

import './CreatePost.css'





const CreatePost = () =>{

    const location = useLocation();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const { quote, author } = location.state || {quote:'', author:''};

    const handleGoBack = () => {
        navigate('/');
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage('Your post was created!');
    }

    return( 
        <div className="create-post" >
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="quoteContent">Quote</label>
                    <textarea 
                        id="quoteContent"
                        name="quoteContent"
                        value={quote} //difined in banner.jsx
                        readOnly
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input 
                        type="text"
                        id="author" 
                        name="author"
                        value={author}
                        readOnly
                        className="author-input"
                        
                        />
                </div>
                <button type="submit" className="button" style={{marginRight: '10px' }}> New Post </button>
                <button onClick={handleGoBack} className="button">Go Back</button>
                {message && <p className="success-message">{message}</p>}
            </form>

        </div>
    )
}


export default CreatePost;