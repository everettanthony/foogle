import Link from 'next/link';
import { Box, Grid } from '@mui/material';
import CountryLookup from './countryLookup';

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: '#f2f2f2', marginTop: 'auto', width: '100%' }}>
            <Grid container spacing={2} sx={{ padding: '1rem 1.5rem' }} className="ftr">
                <Grid item xs={4} sx={{ 
                    alignItems: 'center',
                    display: 'flex' }}
                    className="ftr-col">
                    <Link href="https://ads.google.com/" target="_blank" className="ftr-link">Advertising</Link> 
                    <Link href="https://smallbusiness.withgoogle.com/" target="_blank" className="ftr-link">Business</Link> 
                    <Link href="https://www.google.com/search/howsearchworks/?fg=1" target="_blank" className="ftr-link">How Search Works</Link> 
                </Grid>
                <Grid item xs={4} sx={{ 
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center' }}
                    className="ftr-col">
                    <CountryLookup />
                </Grid>
                <Grid item xs={4} sx={{ 
                    alignItems: 'center',
                    display: 'flex', 
                    justifyContent: 'flex-end' }}
                    className="ftr-col">
                    <Link href="https://policies.google.com/privacy?hl=en&fg=1" target="_blank" className="ftr-link">Privacy</Link> 
                    <Link href="https://policies.google.com/terms?hl=en&fg=1" target="_blank" className="ftr-link">Terms</Link> 
                    <Link href="https://www.google.com/preferences?hl=en&fg=1" target="_blank" className="ftr-link">Settings</Link> 
                </Grid>
            </Grid>
        </Box>
    )
}