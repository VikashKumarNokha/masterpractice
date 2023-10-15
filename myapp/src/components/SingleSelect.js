import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({setSortBy, data, sortBy}) {
 // const [age, setAge] = React.useState('');

  const handleChange = (event) => {
   //setAge(event.target.value);
     setSortBy(event.target.value)
  };

   

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Age"
          onChange={handleChange}
        >
          {
            data?.length > 0 && data.map((e,i)=>{
               return  <MenuItem key={i} value={e}>{e}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
  );
}