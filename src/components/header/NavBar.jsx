
import React,{useState,useEffect}  from 'react';
import Logo from './Logo';
import {NavLink} from 'react-router-dom';
import { FaSistrix } from "react-icons/fa";
import {useInputFilterLight} from '../../hooks/fetchHooks';
import {useInputFilterLightResponsive} from '../../hooks/fetchHooksReponsive';
import {searchContext} from '../../context/SearchContext';
import {searchContextResponsive} from '../../context/SearchContextResponsive';
import { useContext } from 'react';

function  NavBar()
{
  const [start,setStart] = useState(false)
  const [startResponsive,setStartResponsive] = useState(false)
  const [visibility,setVisibility]= useState(true);
  const [isSearching,setIsSearching]= useContext(searchContext);
  const [isSearchingResponsive,setIsSearchingResponsive]= useContext(searchContextResponsive);
  const searchBar = useInputFilterLight(isSearching,start)
  const searchBarResponsive = useInputFilterLightResponsive(isSearchingResponsive,startResponsive)

 let className="header__nav__ul";

  
const handleClick = ()=>{
  setIsSearching(!isSearching)
  if (start===false) 
      setStart(true)
}
const handleClickResponsive = ()=>{
  setIsSearchingResponsive(!isSearchingResponsive)
  if (startResponsive===false) 
      setStartResponsive(true)
}
const onClick = ()=>{
  setIsSearching(false)
 
}

const handleVisibile=()=>{
  setVisibility(!visibility)
}
    const menu =()=>{
      const show =visibility? 
      
        <div  className={className}>
                        <li>
                            <NavLink className="li__a" exact to="/" activeClassName="active1" onClick={onClick}>HOME</NavLink>
                          </li>
                          <li>
                            <NavLink to ="/movies" className="li__a" activeClassName="active1" onClick={onClick}>MOVIES</NavLink>
                          </li>
                          <li>
                            <NavLink to="/tvShows" className="li__a" activeClassName="active1" onClick={onClick}>TV SHOWS</NavLink>
                          </li>
                        
                          {searchBar}
                          <FaSistrix className="toggleSearch" onClick={handleClick}/>
            </div>
 
                        :"";
                      
      return show;
    } 

    const btnMenu =()=>{
      const btnMenu =visibility? <button className="openMenu"  onClick={()=>setVisibility(!visibility)}>
                                       <i class="fa fa-times" aria-hidden="true"></i>   
                                  </button>
                        
                        : <button className="openMenu"  onClick={handleVisibile}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                          </button>;        
                      
     return btnMenu;
    }

   
    return ( 
<div className="header__nav">
             <Logo/>
             {searchBarResponsive}
             <FaSistrix className="toggleSearch__reponsive" onClick={handleClickResponsive}/>
           {
           menu() 
           }
           
          {
            btnMenu()
          }
         
</div>
   
   )

}

export default NavBar;