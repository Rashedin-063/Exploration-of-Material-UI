import { Stack, Button } from '@mui/material';


const ButtonContainer2 = () => {
  return (
    <Stack display="block" direction='row' spacing={4} sx={{border: '2px solid #c3c3c3', p: 4}}>
      <Button variant="contained" size="small">Small</Button>
      <Button variant="contained" >Default</Button>
      <Button variant="contained" size="large">Large</Button>
    </Stack>
  )
}
export default ButtonContainer2