import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetails from './components/MovieDetails/MovieDetails';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
