import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({totalpage, setPage}) {
  return (
    <Stack spacing={2}>
      <Pagination count={totalpage} onChange={(event, page)=>{  setPage(page)  }} variant="outlined" shape="rounded" />
    </Stack>
  );
}