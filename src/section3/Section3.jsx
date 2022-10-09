import React, { useState } from 'react'
import style from './section.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Section3 = ({title,subtitle,text}) => {
    
    const[imageCount,setImageCount] = useState(0);

    const arrImage =[
         "https://mnogomebeli.com/upload/resize_cache/iblock/ec0/1310_610_1/ec08fca680ac4411c3c5887b03aa5005.jpg",
         "https://mnogomebeli.com/upload/iblock/6d8/w6nype2ntqr4736hh33ii68eyl02vhg0.jpg",
         "https://mnogomebeli.com/upload/resize_cache/iblock/522/1310_610_1/ncu9afgyb4j6fpnipd8zcx75lkeczvt9.jpg",
         "https://mnogomebeli.com/upload/iblock/a23/a234fca2e6ba01436c19bac6ab444f1d.png",
         "https://mnogomebeli.com/upload/iblock/a3f/5r0zi2gs5ko9qwgpr00k7fq9rrf1eedy/LOFT-svet_sonoma_3.jpg",
         "https://mnogomebeli.com/upload/resize_cache/iblock/f84/1310_610_1/1x5uinrb3lhrpysge0tl21b33gpw5990.jpg",
         "https://mnogomebeli.com/upload/resize_cache/iblock/ec0/1310_610_1/ec08fca680ac4411c3c5887b03aa5005.jpg",
         "https://mnogomebeli.com/upload/iblock/197/ab3lr5vpw4wt6y7rq0en311s1tff3zh4.jpg",
         "https://mnogomebeli.com/upload/iblock/693/6934216a1199b95d2ddd33265ea24041.jpg",
         "https://mnogomebeli.com/upload/iblock/453/bnnlr7t1puen7akqfxedj32j28jyqx5j.jpg",
         "https://mnogomebeli.com/upload/iblock/071/g4kd0jt1jhh47eqhq27g843hhzy38ux8/divan_bossXO_one_velur_monolit_grey_6.jpg",
         "https://mnogomebeli.com/upload/resize_cache/iblock/997/1310_610_1/9973c144c1b189dc90857344f65127b8.jpg",
    ]
    const im = arrImage[imageCount]; 

  return (
    <div className={style.section3}>
        <h1>{title}</h1>
        <div className={style.two}>
             <h3>{subtitle}</h3>
             <p>{text}</p>
            
            
        </div>
        <div className={style.slider}>
               <ArrowBackIosNewIcon  
                className={style.btn1}
                onClick={()=>setImageCount(imageCount-1)} />
               <img src={im} alt="iamge"/> 
               <ArrowForwardIosIcon
                className={style.btn2}
                onClick={()=> setImageCount(imageCount+1)}/>
            </div>
    </div>
  )
}

export default Section3