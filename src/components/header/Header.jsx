import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import {searchContext, SearchProvider} from '../../context/SearchContext';

function Header()
{
   return <header>
     <SearchProvider>
     <NavBar/>
     </SearchProvider>
     </header>
}

export default Header;