import React from 'react';
import PopularMovies from './PopularMovies'
import Banner from './Banner'
import ComingUp from './ComingUp'


function Home({imageUrl})
{
 
    return (
        <div>
            <Banner imageUrl={imageUrl}/>
            <ComingUp imageUrl={imageUrl}/>
            <PopularMovies imageUrl={imageUrl}/> 
      </div>
    );
}

export default Home;