import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
            id="free-solo-demo"
            freeSolo
            // options={rentableCarsData.map((option) => option.title)}
            renderInput={(params) => <TextField {...params} label="Type to search" />}
            />
            <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            // options={rentableCarsData.map((option) => option.carBrandAndModel)}
            renderInput={(params) => (
                <TextField
                {...params}
                label="Search input"
                InputProps={{
                    ...params.InputProps,
                    type: 'search',
                }}
                />
            )}
            />
        </Stack>
    );
}