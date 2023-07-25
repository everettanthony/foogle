'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  async function randomSearch() {
    setRandomSearchLoading(true);

    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!response) return;

    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1.5, mt: 2, width: '60ch' }} variant="outlined">
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
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
        </FormControl>
        <Grid container justifyContent="center">
          <Button sx={buttonStyles} onClick={handleSubmit}>Search</Button>
          <Button sx={buttonStyles} 
            disabled={randomSearchLoading}
            className="flex items-center justify-center disabled:opacity-80" 
            onClick={randomSearch}>
              I'm Feeling Lucky 
                {randomSearchLoading && <img
                  src="spinner.svg"
                  className="spinner"
                  alt="loading..."
                  width="20"
                  height="20"
                />}
          </Button>
        </Grid>
    </form>
  )
}
