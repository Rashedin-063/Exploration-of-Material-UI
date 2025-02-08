import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';



const TourCard = () => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>

       <Paper elevation={3}>
        <img
          src='https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg'
          alt='Falls'
          className='image'
        />
        <Box paddingX={1}>
          <Typography variant='subtitle1' component='h2'>
            Immerse into the Falls
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <AccessTimeIcon sx={{width: 12.5}}/>
            <Typography variant='body2' component='p'>
              5 Hours
            </Typography>
          </Box>
          <Box sx={{
             display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginTop: '24px'
          }} 
       
          >
  <Rating name="read-only" value={4.5} precision={0.5} size='small' readOnly />
  <Typography variant='body2' component='p' marginLeft={0.5}>
4.5
  </Typography>
  <Typography variant='body3' component='p' marginLeft={1.5}>
(644 reviews)
  </Typography>
          </Box>
          <Box>
            <Typography variant='h6' component='h3' marginTop={0}>
From C $147
  </Typography> 
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};
export default TourCard;
