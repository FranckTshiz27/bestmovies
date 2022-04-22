import React,  {useEffect,useState} from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/SearchContext'

const MyInput = (props) =>{

    const [searchBarStyle,setSeachBarStyle] = useState();
    const myContext = useContext(Context);
   const handleChange = (e)=>{
  }
  
  const history = useHistory();
  
  
  useEffect(() => {
    return history.listen((location) => {
      if (location.pathname !== "/search") {
      }
    });
  }, [history]);
  
  const linkToSearchPage = () => {
    history.push("/search");
  };
  
  const handleClick = ()=>{
   props.onClick()
  
  }
    return (
      <div className={searchBarStyle}>
        <input
          className="ipFilter__input"
          type="search"
          placeholder={props.placeholder}
          onChange={handleChange}
          value={props.value}
          onClick={linkToSearchPage}
        />
       
      </div>
    );
  }
  
  export default MyInput;