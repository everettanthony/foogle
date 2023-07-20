import Link from 'next/link';
import Logo from '@/components/logo';
import SearchBox from './searchBox';
import { Box, Button, Grid } from '@mui/material';

export default function SearchHeader() {
    return (
        <Box sx={{ position: 'fixed', left: 0, top: 0, width: '100%' }}>
            <Grid container sx={{ 
                    alignItems: 'center',
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    padding: '1.5rem' }} 
                    className="hdr hdr-home">
                <Grid item sx={{ paddingTop: '2px' }}>
                    <Logo width={110} height={38} />
                </Grid>
                <Grid item sx={{ flexGrow: '1', px: 2 }}>
                    <SearchBox />
                </Grid>
                <Grid item sx={{ 
                    alignItems: 'center',
                    display: 'flex', 
                    justifyContent: 'flex-end' }}
                    className="ftr-col">
                    <Link href="https://mail.google.com" target="_blank" className="hdr-link">Gmail</Link> 
                    <Link href="https://www.google.com/imghp?hl=en&ogbl" target="_blank" className="hdr-link">Images</Link> 
                    <Button variant="contained" color="primary" size="medium" className="btn" sx={{ 
                        height: '34.5px', 
                        marginLeft: '.25rem', 
                        padding: '6px 16px 4px'}}>
                        Sign In
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}