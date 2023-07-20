import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

const buttonStyles = {
  backgroundColor: '#f8f9fa', 
  border: '1px solid #f8f9fa', 
  borderRadius: '4px',
  color: '#3c4043', 
  fontSize: '14px',
  fontWeight: '400',
  height: '36px',
  lineHeight: '27px',
  margin: '8px 4px',
  padding: '0 16px',
  textAlign: 'center',
  textTransform: 'capitalize',
  '&:hover': {
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    backgroundColor: '#f8f9fa',
    border: '1px solid #dadce0',
    color: '#202124'
  }
};

export default function Search() {
  return (
    <form className="search">
        <FormControl sx={{ m: 1.5, width: '60ch' }} variant="outlined">
            <OutlinedInput
                className="search-field"
                id="outlined-adornment-search"
                startAdornment={<InputAdornment position="start"><SearchIcon sx={{ color: '#9aa0a6' }} /></InputAdornment>}
                aria-describedby="outlined-search-helper-text"
                inputProps={{
                    'aria-label': 'search',
                }}
                sx={{
                  borderRadius: '35px',
                  '&:hover': {
                    '.MuiOutlinedInput-notchedOutline': {
                       boxShadow: '0 1px 6px rgba(32,33,36,.28)' ,
                       borderColor: 'rgba(223,225,229,0)'
                    }
                  }
                }}
            />
        </FormControl>
        <Grid container justifyContent="center">
          <Button sx={buttonStyles}>Search</Button>
          <Button sx={buttonStyles}>I'm Feeling Lucky</Button>
        </Grid>
    </form>
  )
}
