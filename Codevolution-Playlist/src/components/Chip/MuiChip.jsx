import { Stack, Chip, Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import FaceIcon from '@mui/icons-material/Face'


const MuiChip = () => {
  return (
    <Stack direction='row' spacing={1}>
      <Chip label='Mui Chip' color='primary' size='small' />
      <Chip label='Mui Outlined Chip' color='secondary' variant='outlined' />
      <Chip
        label='Mui Chip'
        color='success'
        avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
      />
      <Chip icon={<FaceIcon/>} label='Mui Outlined Chip' color='secondary'/>
      <Chip color='success' label='Click' onClick={() => alert('hello chip')}/>
        <Chip label='Delete' color='error' onClick={() => alert('clicked')}
          onDelete={() => alert('delete handler called')}/>
    </Stack>
  );
}
export default MuiChip