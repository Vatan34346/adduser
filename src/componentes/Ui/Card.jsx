import card from './Card.module.css' 

const Card =props=>{

    
    return <div className={`${card.Card} ${props.className}`}>{props.children}</div>
}


export default Card;