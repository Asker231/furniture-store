import React from 'react'
import style from './section1.module.css';
import image from './10000_Post01.jpg'
import {Link} from 'react-router-dom'


const Section1 = () => {
  return (
    <div className={style.section1}>
        <p>Основано в 1993 году</p>
        <div className={style.wrap}>
            <img src={image} alt='image'/>
        </div>
        <h1><span>Л</span>УЧШАЯ ЖИЗНЬ,<br/>
          СОЗДАННАЯ ДЛЯ ВАС!</h1>
          <Link to='/Catalog'>перейти в каталог</Link>
    </div>
  )
}

export default Section1