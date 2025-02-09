import { Box, Button, Paper, Typography } from "@mui/material"
import BackHandIcon from '@mui/icons-material/BackHand';

const Theming = () => {
  return (
    <Box p={4} sx={{ backgroundColor: 'blue' }}>
      <Paper>
        <Typography variant='h3'>Theming Example</Typography>
        <Typography color='primary'>Hello from VS Code</Typography>
        <h3>Start editing to see some magic happen</h3>

        <Button variant='contained' color='secondary' endIcon={<BackHandIcon/>}>
          Hello from
        </Button>
        <Typography color='customRibRed.superLight' variant='h6'>
          Customized red text
        </Typography>
      </Paper>
      <Box pt={3}>Hello there, it&apos;s big text
        <BackHandIcon color="primary" fontSize="large"/>
      </Box>
    </Box>
  );
}
export default Theming