import React, { useState } from 'react'
import style from './header.module.css';
import Navigation from './Navigation/Navigation';
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import logo from './telegram-cloud-document-2-5233443011957888024 1.png';
import NavMobile from './navMobile/NavMobile';
const Header = () => {
  const[openmenu,setOpenmenu] = useState(false);
  const handleOpen=()=>{
    setOpenmenu(!openmenu)
  }
  return (
    <div className={style.header}>
        <img src={logo} className={style.logo} alt='logo'/>
        <Navigation />
        <div className={style.wrap}>
        <select>
            <option>RU</option>
            <option>En</option>
            <option>UA</option>
        </select>
        <LocalPhoneIcon className={style.phone}/>
        <MenuIcon onClick={()=>setOpenmenu(!openmenu)} className={style.burger}/>
        {
          openmenu?<NavMobile cb={handleOpen}/>:null
        }
        
        </div>
        

    </div>
  )
}

export default Header