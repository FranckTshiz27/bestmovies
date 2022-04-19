import React from 'react';
import Header from '../header/Header';
import PopularMovies from './PopularMovies'
import Banner from './Banner'
import ComingUp from './ComingUp'


function Home({imageUrl})
{
 
    return (
        <div>
            {console.log(process.env.REACT_APP_API_KEY)}
            <Banner imageUrl={imageUrl}/>
            <ComingUp imageUrl={imageUrl}/>
            <PopularMovies imageUrl={imageUrl}/> 
      </div>
    );
}

export default Home;