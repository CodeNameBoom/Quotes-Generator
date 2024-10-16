import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Banner.css'





const Banner = () => {
        const [quote, setQuote] = useState('');
        const [author, setAuthor] = useState('');
        const navigate = useNavigate();

    const fetchQuote = async() => {
        try{
            const response = await fetch('https://api.quotable.io/random');
            if(!response.ok){
                throw new Error ('Something went wrong !');
            }
            const data = await response.json();
            console.log('Fetched Quote: ',data);
            
            setQuote(data.content);
            setAuthor(data.author);
        }catch(error){
            console.log('Error while fetching Quote',error);
        }
    };
    useEffect( () => {
        fetchQuote();
    },[]);

    const handleCreatePost = () => {
        navigate('/create-post', {state:{quote, author} });

    };

    return(
    <div>
        <div>
        <h2>Quote of the Day</h2>
        {quote && (
            <blockquote className='quote'>
                "{quote}"
                <footer className='author'>- {author}</footer>
            </blockquote>
        )}
        <button onClick={fetchQuote} className='button' style={{ marginRight: '10px' }}>Get Qoute</button>
        <button onClick={handleCreatePost} className='button'>Create Post</button>
        </div>
    </div>
    )

}

export default Banner ;