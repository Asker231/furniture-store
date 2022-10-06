import React from 'react'
import CardSlide from './cardslide/CardSlide';
import style from './slider.module.css';
import {cardData} from './cardslide/card.props.js'

const Slider = () => {
  return (
    <div className={style.slider}> 
        <h2><span style={{color:'rgba(255, 150, 25, 1)'}}>Н</span>овинки</h2>
        <div className={style.slides}>
            {
            cardData.map((el)=>{
                return <CardSlide
                url={el.url}
                title={el.title}
                price={el.price}
                />
            })
          }
        </div>
          

        <a>перейти в каталог</a>
    </div>
  )
}

export default Slider