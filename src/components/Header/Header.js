import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import user from "../../images/user.png"
import "./Header.scss"
function Header() {
  const[text,setText]=useState("");
  const dispatch=useDispatch();
  const submitHandler=(e)=>{
    if(text.length>0){
      e.preventDefault();
   dispatch(fetchAsyncMovies(text));
   dispatch(fetchAsyncShows(text));
   setText("");
    }else{
      e.preventDefault();
    }

  }
  return (
    
    <div className='header'>
      <div className='logo'>
      <Link to='/'>
        Movie App
      </Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type='text' value={text}placeholder='Search Movies or Shows'onChange={(e)=>setText(e.target.value)}/>
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className='user-image'>
        <img src={user} alt="user"/>
      </div>
    </div>
    
  )
}

export default Header;
