'use client';
import { useEffect } from 'react';
import { Button } from '@mui/material';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log('Error:', error);
    }, [error]);

    return (
        <div className="pg">
            <h1>Error: Something Went Wrong</h1>
            <Button 
                variant="contained" 
                color="primary" 
                size="medium" 
                className="btn" 
                sx={{ 
                    height: '34.5px', 
                    padding: '6px 16px 4px'
                }}
                onClick={() => reset()}>
                Try Again
            </Button>
        </div>
    )
}