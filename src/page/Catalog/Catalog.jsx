import React from 'react'
import style from './catalog.module.css';
//import { cardData } from './card.props';
import CardSlide from '../../components/slider/cardslide/CardSlide.jsx';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {onValue,ref,} from 'firebase/database';
import {db} from '../../firebase.js';
import { useState,useEffect } from 'react';

const Catalog = () => {
  const[todos,setTodos] = useState([])
  useEffect(()=>{
    onValue(ref(db),(snapshot)=>{
     setTodos([])
      const data = snapshot.val();
      if(data!== null){
       Object.values(data).map((todo)=>{
         setTodos((old) =>[...old,todo]);
       })
      }
    })
   },[])
  return (
    <div className={style.catalog}>
         <div className={style.back}>

         <Link to='/'> <ArrowBackIcon/>назад</Link>
         </div>
         <div className={style.catalogList}>
             {
                todos.map((el,key)=>{
                    return <Link key={el.id} to={`/Catalog/${el.id}`}>
                     <CardSlide
                      url={el.url}
                      title={el.title}
                      price={el.price}
                     />
                    </Link>
                   
                })
             }
         </div>
    </div>
  )
}

export default Catalog



