
import TextField  from '@mui/material/TextField';
//import  Button from '@mui/material/Button';
//import SearchIcon from '@mui/icons-material/Search';
import style from './search.module.css';
const Search = ({func}) => {
  return (
         <div className={style.search}>
         <TextField className={style.inp}
          id="outlined-search"
          label="Search"
          type="search"

          onChange={(e)=>func(e.target.value)}  
            />
         
         </div>

  )
}

export default Search