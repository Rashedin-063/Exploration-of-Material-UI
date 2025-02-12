import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <CircularProgress />
      <CircularProgress color='secondary' />
      <CircularProgress color='primary' />
      {/* <Stack sx={{ color: 'grey.500' }} spacing={2} direction='row'>
        <CircularProgress color='secondary' />
        <CircularProgress color='success' />
        <CircularProgress color='inherit' />
      </Stack>
      <Box>
        <CircularProgress size='30px' />
        <CircularProgress size={40} />
        <CircularProgress size='3rem' />
        <CircularProgress variant='determinate' value={25} />
      </Box> */}
    </Box>
  );
}
