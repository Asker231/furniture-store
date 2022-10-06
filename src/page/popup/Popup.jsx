import React from 'react'
import style from './popup.module.css';
import TextField  from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Popup = () => {
  return (
    <div className={style.popup}>
         <Link 
             className={style.back}
            to='/Catalog'> <ArrowBackIcon/>  назад</Link>
            <div className={style.form}>
                <h1>Заполните заявку</h1>
            <TextField id="standard-basic" label="Введите ваше имя" variant="standard" type='text' />
            <TextField id="standard-basic" label="Введите вашу фамилию" variant="standard"  type='text'/>
            <TextField id="standard-basic" label="Ваш Email" variant="standard" type='email' />
            <TextField id="standard-basic" label="Номер телефона" variant="standard" type='text' />
            <Button variant="contained">Отправить</Button>


            </div>
    </div>
  )
}

export default Popup