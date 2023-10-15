import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({totalpage, setPage, page }) {
  return (
    <Stack spacing={2}>
      <Pagination count={totalpage} page={page} onChange={(event, page)=>{  setPage(page)  }} variant="outlined" shape="rounded" />
    </Stack>
  );
}