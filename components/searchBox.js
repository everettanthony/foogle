'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function SearchBox() {
    const router = useRouter();
    const [input, setInput] = useState('');

    return (
        <form className="search">
            <FormControl sx={{ mx: 1.5, width: '60ch' }} variant="outlined">
                <OutlinedInput
                    className="search-field field-hdr"
                    id="outlined-adornment-search"
                    endAdornment={
                        <InputAdornment position="end" sx={{ height: '100%' }}>
                            <CloseIcon sx={{ 
                                color: '#727986',
                                cursor: 'pointer',
                                height: '25px',
                                width: '25px'
                            }} />
                            <span className="separator"></span>
                            <SearchIcon 
                                color="primary" 
                                sx={{
                                    cursor: 'pointer'
                                }} />
                        </InputAdornment>}
                    aria-describedby="outlined-search-helper-text"
                    inputProps={{
                        'aria-label': 'search',
                    }}
                    sx={{
                    borderRadius: '35px',
                    paddingLeft: '14px',
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
        </form>
    )
}