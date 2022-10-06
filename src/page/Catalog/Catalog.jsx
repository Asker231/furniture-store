import React from 'react'
import style from './catalog.module.css';
import { cardData } from './card.props';
import CardSlide from '../../components/slider/cardslide/CardSlide.jsx';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Catalog = () => {
  return (
    <div className={style.catalog}>
         <div className={style.back}>

         <Link to='/'> <ArrowBackIcon/>назад</Link>
         </div>
         <div className={style.catalogList}>
             {
                cardData.map((el)=>{
                    return <Link to={`/Catalog/${el.id}`}>
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