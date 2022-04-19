import {useState} from 'react';

const ToggleButton= (props)=>
{

   const [value,setValue] = useState(props.value);


   const myToggle = value? <button  className="unselected">

     {props.children}
            
   </button>:<button className="selected">   {props.children}</button>

    return(

       <div>
            {
            myToggle
        }
       </div>
       
    )
}

export default ToggleButton;