import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/Accordion';

const Tour = () => {
  return (
    <>
      <Container sx={{ width: 900 }}>
        <Typography variant='h3' component='h1' marginTop={3}>
          Explore the world in Vegas
        </Typography>
        <Box marginTop={3} sx={{ display: 'flex' }}>
          <img
            src='https://media.timeout.com/images/105124791/750/422/image.jpg'
            height={325}
            style={{ borderRadius: '4px' }}
          />
          <ImageCollage />
        </Box>
        {/* title and description */}
        <Box>
          <Typography variant='h6' component='h4' marginTop={3}>
           About this ticket
          </Typography>
          <Typography variant='p' component='p' marginTop={3}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolore consequuntur explicabo earum perspiciatis eaque, error sint blanditiis maxime culpa, aliquid nobis accusantium repellat dolores. Asperiores dolorum sapiente numquam, vitae repellat perspiciatis modi, nobis nemo autem error tempora minima nihil?
          </Typography>
        </Box>
        {/* accordion */}
        <Box>
          <Typography variant='h6' component='h4' marginY={3}>
           Frequently Asked Question
          </Typography>
    <CustomizedAccordions/>
        </Box>
        
      </Container>
    </>
  );
};
export default Tour;
