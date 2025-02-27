import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import  SaveIcon  from '@mui/icons-material/Save';

const MuiLoadingButton = () => {

  return <Stack spacing={2} direction='row'>
    <LoadingButton variant='outlined'>
      Submit
   </LoadingButton>
    <LoadingButton loading color='secondary' variant='outlined'>
      Submit
    </LoadingButton>
    <LoadingButton variant='outlined' color='warning' loadingIndicator='loading...'>
      Fetch Data
    </LoadingButton>
    <LoadingButton variant='outlined' color='warning' loadingIndicator='loading...' loading>
      Fetch Data
    </LoadingButton>
    <LoadingButton variant='outlined' color='success' loadingPosition='start' startIcon={<SaveIcon/>}>Save</LoadingButton>
    <LoadingButton variant='outlined' color='success' loadingPosition='start' startIcon={<SaveIcon/>} loading>Save</LoadingButton>
  </Stack>
}

export default MuiLoadingButton;