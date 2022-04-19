import { useState } from "react/cjs/react.development";



function InputFilter(props) {
 
 const handleChange = (e)=>{
    let filter= e.target.value;
    props.handleChange({valeur:filter});
   
}

const handleClick = ()=>{
 props.onClick(alert(props.value))
}
  return (
    <div className="ipFilter">
      <input
        className="ipFilter__input"
        type="search"
        placeholder={props.placeholder}
        onChange={handleChange}
        value={props.value}
      />
      <button type="submit" value="Rechercher" onClick={handleClick}>
        Rechercher
      </button>
    </div>
  );
}

export default InputFilter;
