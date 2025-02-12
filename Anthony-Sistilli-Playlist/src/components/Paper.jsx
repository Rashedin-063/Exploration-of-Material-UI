
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
      <Paper elevation={6} square />
      <Paper variant='outlined' sx={{backgroundColor: (theme) => 'primary.main'}} />
    </Box>
  );
}


// variant --> elavation is default, outlined is another option
// square ---> to remove the rounded corners, default is square={false}