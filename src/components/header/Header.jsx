import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import {searchContext, SearchProvider} from '../../context/SearchContext';
import {searchContextResponsive, SearchProviderResponsive} from '../../context/SearchContextResponsive';

function Header()
{
   return <header>
     <SearchProvider>
     <SearchProviderResponsive>
      <NavBar/>
     </SearchProviderResponsive>
     </SearchProvider>
     </header>
}

export default Header;