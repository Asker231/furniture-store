import React from 'react'
import style from './nav.module.css';
import logo from '../telegram-cloud-document-2-5233443011957888024 1.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={style.nav}>
         <Link to='/Catalog'>Каталог</Link>
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