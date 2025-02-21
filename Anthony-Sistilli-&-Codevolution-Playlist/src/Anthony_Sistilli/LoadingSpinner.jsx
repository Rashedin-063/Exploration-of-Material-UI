import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';

export default function CircularIndeterminate() {

  const [progress, setProgress] = useState(0)

// useEffect(() => {
//   const timer = setInterval(() => {
//     setProgress((prevProgress) =>
//       prevProgress >= 100 ? 0 : prevProgress + 10
//     );
//   }, 800);

//   return () => {
//     clearInterval(timer);
//   };
  // }, []);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevState => {
        if (prevState >= 100) return 0;
        else {
          return ( prevState + 10);
        }
      })
    }, 800)

    return () => { clearTimeout(timer)}
  },[])


  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      {/* <CircularProgress />
      <CircularProgress color='secondary' />
      <CircularProgress color='primary' /> */}
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
      <CircularProgress variant='determinate' value={progress} />
    </Box>
  );
}
