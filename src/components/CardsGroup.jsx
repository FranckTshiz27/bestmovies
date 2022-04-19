import { useEffect, useState } from 'react/cjs/react.development';
import Card from './Card';

const Cardsgroup= (props)=>{


    
    const  [cards,setCards] = useState(props.cards);


    useEffect(()=>{

    })

const showCards= ()=>{

    if ( cards!=null) {

       
//    alert(" hfhfh "+props.cards[0])
        // const groupOfCards = cards.map((card)=>{
        //     return  <Card img={card.url} title={card.title}/>
        // }
            
        // )
        // return groupOfCards;

    

   
}
}

    return (
        <div>
            {showCards()}
        </div>

    )
}

export default Cardsgroup;