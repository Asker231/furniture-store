import React from 'react'
import style from './section.module.css';
import { Link } from 'react-router-dom';
const Section = () => {
  return (
    <div className={style.section}>
        <div className={style.left}>

        </div>
        <img src='https://hoff.ru/upload/hoff_resize/upload/iblock/856/856f2cf232bcb2668218af91917141de.jpg/822x548_98.jpeg'alt='al'/>
        <div className={style.right}>
            <h2><span style={{color:'rgba(255, 150, 25, 1)'}}>И</span>ндивидуальная мебель</h2>
            <h3>Полный цикл производства.</h3>
            <p>Качество мягкой мебели начинается задолго до начала ее производства.</p>
            <Link>Индивидуальная мебель</Link>
        </div>

    </div>
  )
}

export default Section