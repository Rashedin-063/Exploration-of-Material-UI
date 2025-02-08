/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { createTheme , ThemeProvider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';



const TourCard = ({tour}) => {

  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: 'body2',
            },
            style: {
              fontSize: 11
            }
          },
          {
            props: {
              variant: 'body3',
            },
            style: {
              fontSize: 10
            }
          },
        ]
      }
    }
  });

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} alt='Falls' className='image' />
          <Box paddingX={1}>
            <Typography variant='subtitle1' component='h2'>
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <AccessTimeIcon sx={{ width: 12.5 }} />
              <Typography variant='body2' component='p'>
                {tour.duration} Hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '24px',
              }}
            >
              <Rating
                name='read-only'
                value={tour.rating}
                precision={0.5}
                size='small'
                readOnly
              />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant='body3' component='p' marginLeft={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' component='h3' marginTop={0}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};
export default TourCard;
