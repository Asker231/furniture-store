import { useEffect, useRef, useState } from 'react'
import style from './popup.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Popup = () => {

  const [value, setValue] = useState();
  const [err, setErr] = useState(null);
  const btnRef = useRef();
  
 
  const blur = (e) => {
    if (!e.target.value) {
    btnRef.current.style.disabled = false;
      setErr('Заполните все поля')
    } else {
      setErr(null)
    }
}
  return (
    <div className={style.popup}>
      <Link
        className={style.back}
        to='/Catalog'> <ArrowBackIcon />  назад</Link>
      <div className={style.form}>
        <h1>Заполните заявку</h1>
        <span style={{color:'red'}}>{err}</span>
        <TextField
          value={value}
          onBlur={blur}
          id="standard-basic"
          label="Введите ваше имя"
          variant="standard"
          type='text' />
      
        <TextField
          value={value}
          onBlur={blur}
          id="standard-basic"
          label="Введите вашу фамилию"
          variant="standard"
          type='text' />
         
        
        <TextField
          value={value}
          onBlur={blur}
          id="standard-basic" label="Ваш Email" variant="standard" type='email' />
     
        <TextField
          value={value}
          placeholder={err}
          onBlur={blur}
          id="standard-basic" label="Номер телефона" variant="standard" type='text' />
    
        <Button ref={btnRef} variant="contained">Отправить</Button>


      </div>
    </div>
  )
}

export default Popup