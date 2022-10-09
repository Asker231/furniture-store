import React from 'react'
import style from './catalog.module.css';
//import { cardData } from './card.props';
import CardSlide from '../../components/slider/cardslide/CardSlide.jsx';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { onValue, ref, } from 'firebase/database';
import { db } from '../../firebase.js';

import { useState, useEffect } from 'react';
import Search from '../../components/search/Search';

const Catalog = () => {
  const [todos, setTodos] = useState([])
  const [query, setQuery] = useState("");

  const handleSearch = (val) => {
    setQuery(val)
  }

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([])
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          return setTodos((old) => [...old, todo]);
        })
      }
    })
  }, [])
  return (
    <div className={style.catalog}>
      <Search func={handleSearch} />
      <div className={style.back}>
        <Link to='/'> <ArrowBackIcon />назад</Link>
      </div>
      <div className={style.catalogList}>
        {
          todos.filter((el) => el.title.toLowerCase().includes(query))
          .map((el, key) => {
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



