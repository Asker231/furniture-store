import React from 'react'
import style from './nav.module.css';
import logo from '../telegram-cloud-document-2-5233443011957888024 1.png';

const Navigation = () => {
  return (
    <div className={style.nav}>
        <a href='#'>каталог
        <div className={style.subnav}>
           <a href='#'>Диваны </a>
           <a href='#'>Кресла </a>
           <a href='#'>Стулья </a>
           <a href='#'>Кровати </a>
           <a href='#'>Матрацы </a>
           <a href='#'>Пуфы </a>
           <a href='#'>Эксклюзивная мебель</a>
           <a href='#'>2D-3D модели</a>
        </div>
        </a>
        <a href='#'>индивидуальная мебель</a> 
        <a href='#'>контакты</a>
        <img src={logo} alt='logo'/>
        <a href='#'>о компании</a>
        <a href='#'>+789343499348</a>
        <select>
            <option selected value='RU'>RU</option>
            <option >EN</option>
            <option>UA</option>
        </select>

    </div>
  )
}

export default Navigation