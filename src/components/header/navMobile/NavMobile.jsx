import React from 'react'
import style from './navmobile.module.css';
import { Link } from 'react-router-dom';
const NavMobile = ({cb}) => {
  return (
    <div className={style.navmobile}>
        <span onClick={()=>cb()}>&times;</span>
      <Link to='/Catalog'>Каталог</Link>
      <a href="">Индивидуальная мебель</a>
      <a href="">2D-3D модели</a>
      <a href="">Шоу-рум</a>
      <a href="">Страница партнеров дизайнеров</a>
      <a href="">Дилерам</a>
      <a href="">Контакты</a>

    </div>
  )
}

export default NavMobile