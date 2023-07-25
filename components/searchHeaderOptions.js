'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const tabValues = ['All', 'Images'];

export default function SearchHeaderOptions() {
    const [value, setValue] = useState(0);
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm');

    function handleChange(event, newValue) {
        setValue(newValue);
        router.push(`/search/${tabValues[newValue] === 'Images' ? 'image' : 'web'}?searchTerm=${searchTerm}`);
    }

    return (
        <Tabs
            className="tabs"
            sx={{ margin: '0 0 0 10rem' }}
            value={value}
            onChange={handleChange}
            aria-label="Search Options">
            <Tab icon={<SearchIcon fontSize="small" />} iconPosition="start" label="All" />
            <Tab icon={<CameraAltOutlinedIcon fontSize="small" />} iconPosition="start" label="Images" />
        </Tabs>
    )
}
