import { useEffect, useState } from 'react/cjs/react.development';
import Card from './Card';
const Cardsgroup= (props)=>{

    const  [cards,setCards] = useState(props.cards);
    useEffect(()=>{

    })

const showCards= ()=>{
}

    return (
        <div>
            {showCards()}
        </div>

    )
}

export default Cardsgroup;