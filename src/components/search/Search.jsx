
import TextField  from '@mui/material/TextField';
import  Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import style from './search.module.css';
const Search = () => {
  
  
  return (
         <div className={style.search}>
         <TextField className={style.inp}
          id="outlined-search"
          label="Search"
            type="search"  
            />
         <Button variant="contained"><SearchIcon/></Button>
         </div>

  )
}

export default Search