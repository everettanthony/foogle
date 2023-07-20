import Link from 'next/link';
import { Box, Button, Grid } from '@mui/material';

export default function HomeHeader() {
    return (
        <Box sx={{ position: 'fixed', left: 0, top: 0, width: '100%' }}>
            <Grid container sx={{ padding: '1rem 1.5rem' }} className="hdr hdr-home">
                <Grid item xs={6}></Grid>
                <Grid item xs={6} sx={{ 
                    alignItems: 'center',
                    display: 'flex', 
                    justifyContent: 'flex-end' }}>
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