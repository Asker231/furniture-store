import React from 'react'
import style from './card.module.css';

const CardSlide = ({url,title,price}) => {
  return (

         <div className={style.card}>
       <img src={url} alt='alt'/>
       <h3>{title}</h3>
       <span>{price}</span>
    </div>

   
  )
}

export default CardSlide