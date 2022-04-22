import React,{ useState ,useContext} from "react";


function InputFilterLight(props) {

 const handleChange = (e)=>{
    let filter= e.target.value;
    props.handleChange({valeur:filter});
   
}

  return (
    <div className="ipFilter-ligth">
      <input
        className="ipFilter__input"
        type="search"
        placeholder={props.placeholder}
        onChange={handleChange}
        value={props.value}
      />
     
    </div>
  );
}

export default InputFilterLight;
