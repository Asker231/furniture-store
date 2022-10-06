import React, { useEffect, useState } from 'react'
import {useParams}  from 'react-router-dom';
import { cardData } from './Catalog/card.props';
import style from './page.module.css';
import {Link} from 'react-router-dom'
import Button  from '@mui/material/Button';
import { height } from '@mui/system';
const Page = () => {
    const[pops,setPops] = useState(false);
    const [data,setData] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        setData(cardData)
    },[data])
  const d = data.filter((el)=>{
   return el.id ==id
})
console.log(d);
  return (
    <div className={style.page}>
        {
            d.map((el)=>{
                  return <div className={style.cardinfo}>
                      <Link 
                      className={style.back}
                      to='/Catalog'>назад</Link>
                       <img src={el.url}/>
                       <h1>{el.title}</h1>
                       <p className={pops?style.h:style.p}
                        >{el.text}  </p>
                       <Button 
                       onClick={()=>setPops(!pops)} 
                       variant="outlined">{
                        pops?'скрыть':'развернуть'
                       }</Button>
                       <Link className={style.popup} to='/popup'>Заполнить заявку</Link>
                  </div>
            })
        }
    </div>
  )
}

export default Page